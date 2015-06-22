package nl.ebpi.auth;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.eventbus.EventBus;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Creates and initialises the data
 */
public class DataInitializerService extends AbstractVerticle {
    private final static Logger LOGGER = Logger.getLogger(DataInitializerService.class.getName());
    private Connection conn;


    @Override
    public void start() throws Exception {

        EventBus eb = vertx.eventBus();

        eb.consumer("data-initializer-address", message -> {
            // setup user data
            setUpInitialData();
            LOGGER.info("Database is initialised.");
        });

        LOGGER.info(String.format("%s is up and running.", DataInitializerService.class.getName()));
    }


    private void setUpInitialData() {
        try {
            conn = DriverManager.getConnection("jdbc:hsqldb:mem:test?shutdown=true");
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
        } catch (SQLException e) {
            LOGGER.log(Level.SEVERE, "Failed to initialize database");
            vertx.close();

        }


    }

    private void executeStatement(String sql) throws SQLException {
        conn.createStatement().execute(sql);
    }
}
