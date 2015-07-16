package nl.ebpi.microservices.database;

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
 * Creates and initialises demo data
 */
public class DataInitializerService extends AbstractVerticle {
    private final static Logger LOGGER = Logger.getLogger(DataInitializerService.class.getName());
    MongoClient dbClient;

    @Override
    public void start() throws Exception {
        LOGGER.info(String.format("%s is up and running.", DataInitializerService.class.getName()));
        dbClient = MongoClient.createShared(vertx, new JsonObject().put("db_name", "tasks_db").put("host", "mongodb").put("port", 27017));
        initializeTasks();
    }

    @Override
    public void stop() throws Exception {
        dbClient.close();
        LOGGER.info(String.format("Stopping %s service", DataInitializerService.class.getName()));
    }

    private void initializeTasks() {

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
            tasks.add(new JsonObject()
                    .put("_id", "4")
                    .put("user_id", "2")
                    .put("title", "Second user's task")
                    .put("description", "Second user's task")
                    .put("assignee", "Mike"));


            for (JsonObject task : tasks) {
                dbClient.insert("tasks", task, res -> {
                    LOGGER.info(format("Task '%s' is inserted.", task.encode()));
                });
            }

        });


    }

}
