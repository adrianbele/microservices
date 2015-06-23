package nl.ebpi.microservices.webserver;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.http.HttpServerRequest;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.auth.jwt.JWTAuth;
import io.vertx.ext.auth.jwt.JWTOptions;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.JWTAuthHandler;
import io.vertx.ext.web.handler.StaticHandler;

import java.util.logging.Level;
import java.util.logging.Logger;

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
        router.get("/api/newToken").handler(this::handelLogin);

        // this is the secret API
        router.get("/api/protected").handler(ctx -> {
            ctx.response().putHeader("Content-Type", "text/plain");
            ctx.response().end("a secret you should keep for yourself...");
        });

        // Serve the non private static pages
        router.route().handler(StaticHandler.create());
        vertx.createHttpServer().requestHandler(router::accept).listen(8080);
        LOGGER.info(String.format("%s is up and running.", WebServer.class.getName()));
    }


    private void handelLogin(RoutingContext context) {
        HttpServerRequest req = context.request();
        String username = req.getParam("username");
        String password = req.getParam("password");
        if (username != null && password != null) {
            JsonObject authInfo = (new JsonObject()).put("username", username).put("password", password);
            vertx.eventBus().send("login-address", authInfo, reply -> {
                context.response().putHeader("Content-Type", "text/plain");
                if (reply.succeeded() && "succeed".equals(reply.result().body())) {
                    context.response().end(jwtAuthProvider.generateToken(new JsonObject(), new JWTOptions().setExpiresInSeconds(60)));

                } else {
                    context.response().end("Wrong password");
                    LOGGER.log(Level.SEVERE, "No replay.");
                }
            });


        } else {
            req.response().putHeader("location", "index.html").setStatusCode(302).end();
        }
    }


}
