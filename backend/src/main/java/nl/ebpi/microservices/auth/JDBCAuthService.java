package nl.ebpi.microservices.auth;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.eventbus.EventBus;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.auth.AuthProvider;
import io.vertx.ext.auth.jdbc.JDBCAuth;
import io.vertx.ext.jdbc.JDBCClient;

import java.util.logging.Logger;

/**
 * Authentication service which authenticate user against database
 */
public class JDBCAuthService extends AbstractVerticle {
    private final static Logger LOGGER = Logger.getLogger(JDBCAuthService.class.getName());

    @Override
    public void start() throws Exception {

        EventBus eventBus = vertx.eventBus();
        eventBus.send("data-initializer-address", "initialize");
        AuthProvider authProvider = getJDBCAuthProvider();

        eventBus.consumer("login-address", message -> {


            JsonObject user = (JsonObject) message.body();
            authProvider.authenticate(user, (res) -> {
                if (res.succeeded()) {
                    message.reply("succeed");
                } else {
                    message.reply("failed");
                }

            });

        });

        LOGGER.info(String.format("%s is up and running.", JDBCAuthService.class.getName()));
    }

    private AuthProvider getJDBCAuthProvider() {
        JDBCClient client = JDBCClient.createShared(vertx, new JsonObject()
                .put("url", "jdbc:hsqldb:mem:test?shutdown=true")
                .put("driver_class", "org.hsqldb.jdbcDriver"));
        // Simple auth service which uses a JDBC data source
        return JDBCAuth.create(client);
    }
}