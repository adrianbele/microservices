package nl.ebpi.auth;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Vertx;
import io.vertx.core.http.HttpServerRequest;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.auth.AuthProvider;
import io.vertx.ext.auth.jdbc.JDBCAuth;
import io.vertx.ext.auth.jwt.JWTAuth;
import io.vertx.ext.auth.jwt.JWTOptions;
import io.vertx.ext.jdbc.JDBCClient;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.JWTAuthHandler;
import io.vertx.ext.web.handler.StaticHandler;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.function.Consumer;

public class AuthService extends AbstractVerticle {

    private JWTAuth jwtAuthProvider;

    // Convenience method so you can run it in your IDE
    public static void main(String[] args) {
        runVertx();
    }

    @Override
    public void start() throws Exception {

        // setup user data
        setUpInitialData("jdbc:hsqldb:mem:test?shutdown=true");

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
    }

    private void handelLogin(RoutingContext context) {


        HttpServerRequest req = context.request();

        JDBCClient client = JDBCClient.createShared(vertx, new JsonObject()
                .put("url", "jdbc:hsqldb:mem:test?shutdown=true")
                .put("driver_class", "org.hsqldb.jdbcDriver"));
        // Simple auth service which uses a JDBC data source
        AuthProvider authProvider = JDBCAuth.create(client);

        String username = req.getParam("username");
        String password = req.getParam("password");
        if (username != null && password != null) {
            JsonObject authInfo = (new JsonObject()).put("username", username).put("password", password);
            authProvider.authenticate(authInfo, (res) -> {
                if (res.succeeded()) {
                    context.response().putHeader("Content-Type", "text/plain");
                    context.response().end(jwtAuthProvider.generateToken(new JsonObject(), new JWTOptions().setExpiresInSeconds(60)));
                } else {
                    context.response().putHeader("Content-Type", "text/plain");
                    context.response().end("Wrong password");
                }

            });

        } else {
            req.response().putHeader("location", "/index.html").setStatusCode(302).end();
        }
    }


    private static void runVertx() {
        String pathToClass = "microservices-web/src/main/java/" + AuthService.class.getPackage().getName().replace(".", "/");
        System.setProperty("vertx.cwd", pathToClass);

        Consumer<Vertx> runner = vertx -> {
            try {
                vertx.deployVerticle(AuthService.class.getName());

            } catch (Throwable t) {
                t.printStackTrace();
            }
        };

        Vertx vertx = Vertx.vertx();
        runner.accept(vertx);
    }

    private Connection conn;

    private void setUpInitialData(String url) throws SQLException, ClassNotFoundException {
        conn = DriverManager.getConnection(url);
        executeStatement("drop table if exists user;");
        executeStatement("drop table if exists user_roles;");
        executeStatement("drop table if exists roles_perms;");
        executeStatement("create table user (username varchar(255), password varchar(255), password_salt varchar(255) );");
        executeStatement("create table user_roles (username varchar(255), role varchar(255));");
        executeStatement("create table roles_perms (role varchar(255), perm varchar(255));");

        executeStatement("insert into user values ('tim', 'EC0D6302E35B7E792DF9DA4A5FE0DB3B90FCAB65A6215215771BF96D498A01DA8234769E1CE8269A105E9112F374FDAB2158E7DA58CDC1348A732351C38E12A0', 'C59EB438D1E24CACA2B1A48BC129348589D49303858E493FBE906A9158B7D5DC');");
        executeStatement("insert into user_roles values ('tim', 'dev');");
        executeStatement("insert into user_roles values ('tim', 'admin');");
        executeStatement("insert into roles_perms values ('dev', 'commit_code');");
        executeStatement("insert into roles_perms values ('dev', 'eat_pizza');");
        executeStatement("insert into roles_perms values ('admin', 'merge_pr');");
    }

    private void executeStatement(String sql) throws SQLException {
        conn.createStatement().execute(sql);
    }
}
