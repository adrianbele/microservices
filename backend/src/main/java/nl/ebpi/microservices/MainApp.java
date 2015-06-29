package nl.ebpi.microservices;

import io.vertx.core.Vertx;
import nl.ebpi.microservices.webserver.DataInitializerService;
import nl.ebpi.microservices.auth.JDBCAuthService;
import nl.ebpi.microservices.taskservice.TaskService;
import nl.ebpi.microservices.webserver.WebServer;

import java.util.function.Consumer;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Microservices application main class which runs the application
 */
public class MainApp {
    private final static Logger LOGGER = Logger.getLogger(DataInitializerService.class.getName());

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
                vertx.deployVerticle(TaskService.class.getName());
                vertx.deployVerticle(DataInitializerService.class.getName());
                vertx.deployVerticle(JDBCAuthService.class.getName());
                vertx.deployVerticle(WebServer.class.getName());


            } catch (Throwable t) {
                LOGGER.log(Level.SEVERE, t.getMessage());
            }
        };


        Vertx vertx = Vertx.vertx();

        runner.accept(vertx);

    }


}
