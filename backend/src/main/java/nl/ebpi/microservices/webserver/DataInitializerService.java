package nl.ebpi.microservices.webserver;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.eventbus.EventBus;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.mongo.MongoClient;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import static java.lang.String.format;

/**
 * Creates and initialises the data
 */
public class DataInitializerService extends AbstractVerticle {
    private final static Logger LOGGER = Logger.getLogger(DataInitializerService.class.getName());

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
        initializeUsers();
        initializeTasks();


    }

    private void initializeUsers() {
        try {
            Connection conn = DriverManager.getConnection("jdbc:hsqldb:mem:test?shutdown=true");
            executeStatement("drop table if exists user;", conn);
            executeStatement("drop table if exists user_roles;", conn);
            executeStatement("drop table if exists roles_perms;", conn);
            executeStatement("create table user (username varchar(255), password varchar(255), password_salt varchar(255) );", conn);
            executeStatement("create table user_roles (username varchar(255), role varchar(255));", conn);
            executeStatement("create table roles_perms (role varchar(255), perm varchar(255));", conn);

            executeStatement("insert into user values ('tim', 'EC0D6302E35B7E792DF9DA4A5FE0DB3B90FCAB65A6215215771BF96D498A01DA8234769E1CE8269A105E9112F374FDAB2158E7DA58CDC1348A732351C38E12A0', 'C59EB438D1E24CACA2B1A48BC129348589D49303858E493FBE906A9158B7D5DC');", conn);
            executeStatement("insert into user_roles values ('tim', 'dev');", conn);
            executeStatement("insert into user_roles values ('tim', 'admin');", conn);
            executeStatement("insert into roles_perms values ('dev', 'commit_code');", conn);
            executeStatement("insert into roles_perms values ('dev', 'eat_pizza');", conn);
            executeStatement("insert into roles_perms values ('admin', 'merge_pr');", conn);
        } catch (SQLException e) {
            LOGGER.log(Level.SEVERE, "Failed to initialize database");
            vertx.close();

        }

    }

    private void initializeTasks() {
        MongoClient dbClient = MongoClient.createShared(vertx, new JsonObject().put("db_name", "tasks_db"));
        dbClient.dropCollection("tasks", drop -> {
            if (drop.failed()) {
                throw new RuntimeException(drop.cause());
            }

            List<JsonObject> tasks = new LinkedList<>();

            tasks.add(new JsonObject()
                    .put("_id", "1")
                    .put("user_id", "1")
                    .put("title", "Report an issue")
                    .put("description", "Task description")
                    .put("assignee", "Henk"));

            tasks.add(new JsonObject()
                    .put("_id", "2")
                    .put("user_id", "1")
                    .put("title", "Bel de klant")
                    .put("description", "Task description")
                    .put("assignee", "Marco"));

            tasks.add(new JsonObject()
                    .put("_id", "3")
                    .put("user_id", "1")
                    .put("title", "Doe de boodschappen")
                    .put("description", "Task description")
                    .put("assignee", "Nimo"));


            tasks.stream().forEach(task -> LOGGER.info(format("Task '%s' is inserted.", task.encode())));
        });
    }

    private void executeStatement(String sql, Connection conn) throws SQLException {
        conn.createStatement().execute(sql);
    }
}
