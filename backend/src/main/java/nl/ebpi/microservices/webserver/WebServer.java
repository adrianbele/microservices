package nl.ebpi.microservices.webserver;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.AsyncResult;
import io.vertx.core.Future;
import io.vertx.core.Handler;
import io.vertx.core.eventbus.DeliveryOptions;
import io.vertx.core.eventbus.Message;
import io.vertx.core.eventbus.ReplyException;
import io.vertx.core.http.HttpHeaders;
import io.vertx.core.http.HttpServerRequest;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.auth.jwt.JWTAuth;
import io.vertx.ext.auth.jwt.JWTOptions;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.JWTAuthHandler;
import io.vertx.ext.web.handler.StaticHandler;

import java.util.logging.Logger;

/**
 * Main http service to handle http requests for the application
 */
public class WebServer extends AbstractVerticle {
    private final static Logger LOGGER = Logger.getLogger(WebServer.class.getName());
    private JWTAuth jwtAuthProvider;

    @Override
    public void start() throws Exception {
        Router router = Router.router(vertx);

        JsonObject config = new JsonObject().put("keyStore", new JsonObject()
                .put("path", "keystore.jceks")
                .put("type", "jceks")
                .put("password", "secret"));

        jwtAuthProvider = JWTAuth.create(vertx, config);

        // protect the API
        router.route("/api/*").handler(JWTAuthHandler.create(jwtAuthProvider, "/api/newToken"));

        // this route is excluded from the auth handler
        router.get("/api/newToken").handler(this::loginHandler);

        // this is the secret API
        router.get("/api/tasks/:username").handler(this::taskHandler);
        router.post("/api/tasks/:username").handler(this::taskHandler);

        router.options("/api/*").handler(ctx -> {
            addCorsHeaders(ctx);
            ctx.response().end();
        });

        // Serve the non private static pages
        router.route().handler(StaticHandler.create());
        vertx.createHttpServer().requestHandler(router::accept).listen(8080);
        LOGGER.info(String.format("%s is up and running.", WebServer.class.getName()));
    }

    private void taskHandler(RoutingContext ctx) {
        JsonObject request = new JsonObject();
        if(null != ctx.getBodyAsJson()) {
            request = ctx.getBodyAsJson();
        }
        request.put("user_id", "1");
       // System.out.println(ctx.user());
       vertx.eventBus().send("task-service-address", request, new DeliveryOptions().addHeader("action", ctx.request().method().name()), resultHandler(ctx));
    }

    private Handler<AsyncResult<Message<Object>>> resultHandler(RoutingContext ctx) {
        return reply -> {

            if (reply.result().body() instanceof ReplyException) {
                ReplyException exception = (ReplyException) reply.result().body();
                Future.failedFuture(exception);
            } else {

                JsonObject resultObject = (JsonObject) reply.result().body();
                JsonObject actionReplyMessage = resultObject.getJsonObject("actionReplyMessage");
                Future.succeededFuture(reply.result());

                ctx.response().putHeader(HttpHeaders.CONTENT_TYPE, "application/json");
                addCorsHeaders(ctx);

                if (actionReplyMessage.getBoolean("failed", false)) {
                    ctx.response().end(actionReplyMessage.encode());
                } else {
                    ctx.response().end(resultObject.encode());
                }
            }
        };
    }

    private void loginHandler(RoutingContext context) {
        HttpServerRequest req = context.request();
        String username = req.getParam("username");
        String password = req.getParam("password");
        if (username != null && password != null) {
            JsonObject authInfo = (new JsonObject()).put("username", username).put("password", password);
            vertx.eventBus().send("login-address", authInfo, reply -> {
                context.response().putHeader("Content-Type", "text/plain");
                addCorsHeaders(context);
                if (reply.succeeded() && "succeed".equals(reply.result().body())) {
                    LOGGER.info("Good username and password");
                    context.response().end(jwtAuthProvider.generateToken(new JsonObject().put("sub", username), new JWTOptions().setExpiresInSeconds(3600)));

                } else {
                    LOGGER.info("Wrong password");
                    context.response().end("Wrong password");
                }
            });
        } else {
            req.response().putHeader("location", "index.html").setStatusCode(302).end();
        }
    }

    private void addCorsHeaders(RoutingContext ctx) {
        ctx.response().putHeader("Access-Control-Allow-Origin", "*");
        ctx.response().putHeader("Access-Control-Allow-Methods", "HEAD,GET,POST,PUT,DELETE,OPTIONS");
        ctx.response().putHeader("Access-Control-Allow-Headers","Authorization, Content-Type");
        ctx.response().putHeader("Allow", "HEAD,GET,POST,PUT,DELETE,OPTIONS");
    }
}
