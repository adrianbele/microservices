package nl.ebpi.microservices;

import io.vertx.core.Vertx;


import java.util.function.Consumer;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Microservices application main class which runs the application
 */
public class MainApp {
    private final static Logger LOGGER = Logger.getLogger(MainApp.class.getName());

    // Convenience method to run the application
    public static void main(String[] args) {
        LOGGER.info(String.format("%s is started.", MainApp.class.getName()));
        runVertx();
    }

    private static void runVertx() {

        String pathToClass = "bakend/src/main/java/" + MainApp.class.getPackage().getName().replace(".", "/");
        System.setProperty("vertx.cwd", pathToClass);
        System.out.println(pathToClass);

        Consumer<Vertx> runner = vertx -> {
            try {
                vertx.deployVerticle("nl.ebpi.microservices.taskservice.TaskService");
                try {
                    vertx.deployVerticle("nl.ebpi.microservices.taskservice.TaskService");
                } catch (Exception e) {
                    e.printStackTrace();
                }
                vertx.deployVerticle("nl.ebpi.microservices.database.DataInitializerService");
                vertx.deployVerticle("nl.ebpi.microservices.auth.JDBCAuthService");
                vertx.deployVerticle("nl.ebpi.microservices.webserver.WebServer");


            } catch (Throwable t) {
                LOGGER.log(Level.SEVERE, t.getMessage());
            }
        };


        Vertx vertx = Vertx.vertx();

        runner.accept(vertx);

    }


}
