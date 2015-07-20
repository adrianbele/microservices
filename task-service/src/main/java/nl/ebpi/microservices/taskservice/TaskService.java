package nl.ebpi.microservices.taskservice;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.AsyncResult;
import io.vertx.core.eventbus.EventBus;
import io.vertx.core.eventbus.Message;
import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.mongo.MongoClient;

import java.util.logging.Logger;

import static java.lang.String.format;

/**
 * Service which offers crud operations to deal with tasks
 */
public class TaskService extends AbstractVerticle {

    private final static Logger LOGGER = Logger.getLogger(TaskService.class.getName());

    private static final String TASK_SERVICE_ADDRESS = "task-service-address";
    private static final String ACTION_PUT = "PUT";
    private static final String ACTION_POST = "POST";
    private static final String ACTION_DELETE = "DELETE";
    private static final String ACTION_GET = "GET";
    private static final String ACTION_KEY = "action";
    private static final String ACTION_RESULT_KEY = "actionResult";
    private static final String ACTION_REPLY_MESSAGE_KEY = "actionReplyMessage";
    private MongoClient mongoClient;


    @Override
    public void start() throws Exception {
        mongoClient = MongoClient.createShared(vertx, new JsonObject().put("db_name", "tasks_db"));

        EventBus eventBus = vertx.eventBus();
        eventBus.consumer(TASK_SERVICE_ADDRESS, message -> {

            handleQuery(message);
        });
    }

    @Override
    public void stop() throws Exception {

        mongoClient.close();
        System.out.println("stop task service");
        LOGGER.info("Stopping tast service");
    }

    private void handleQuery(Message<Object> message) {
        String action = message.headers().get(ACTION_KEY);

        final JsonObject actionReplyMessage = new JsonObject().put(ACTION_KEY, action);

        switch ( action ) {
            case ACTION_PUT:
                update(message, actionReplyMessage);
                break;
            case ACTION_POST:
                addTask(message, actionReplyMessage);
                break;
            case ACTION_DELETE:
                removeTask(message, actionReplyMessage);
                break;
            case ACTION_GET:
                retrieveTasksByUserId(message, actionReplyMessage);
                break;
            default:
                actionReplyMessage.put("failure-case", "Unsupported action");
                actionReplyMessage.put("failed", "true");
                LOGGER.info(format("Unsupported operation '%s'.", action));
                message.reply(new JsonObject().put("actionReplyMessage", actionReplyMessage));
        }


    }

    private void removeTask(final Message<Object> messageBody, final JsonObject actionReplyMessage) {
        final JsonObject resultObject = new JsonObject().put(ACTION_REPLY_MESSAGE_KEY, actionReplyMessage);
        JsonObject requestJson = (JsonObject) messageBody.body();
        mongoClient.removeOne("tasks", new JsonObject().put("_id", requestJson.getValue("_id")), lookup -> {
            // error handling
            errorHandling(actionReplyMessage, lookup);
            messageBody.reply(resultObject);

        });

    }

    private void update(final Message<Object> messageBody, final JsonObject actionReplyMessage) {
        final JsonObject resultObject = new JsonObject().put(ACTION_REPLY_MESSAGE_KEY, actionReplyMessage);

        JsonObject requestJson = (JsonObject) messageBody.body();

        JsonObject taksObject = (JsonObject) messageBody.body();
        mongoClient.replace("tasks", new JsonObject().put("_id", requestJson.getValue("_id")), taksObject, lookup -> {
            // error handling
            errorHandling(actionReplyMessage, lookup);
            messageBody.reply(resultObject);

        });


    }


    private void addTask(final Message<Object> messageBody, final JsonObject actionReplyMessage) {
        final JsonObject resultObject = new JsonObject().put(ACTION_REPLY_MESSAGE_KEY, actionReplyMessage);
        JsonObject requestJson = (JsonObject) messageBody.body();
        // Create a new document on mongo.
        // insert into mongo
        mongoClient.insert("tasks", requestJson, lookup -> {
            // error handling

            resultObject.put(ACTION_RESULT_KEY, new JsonObject().put("_id", lookup.result()));
            messageBody.reply(resultObject);
        });


    }


    private void retrieveTasksByUserId(final Message<Object> messageBody, final JsonObject actionReplyMessage) {

        JsonObject requestJson = (JsonObject) messageBody.body();
        mongoClient.find("tasks", requestJson, lookup -> {
            // error handling
            errorHandling(actionReplyMessage, lookup);
            final JsonArray resObject = new JsonArray();
            for (JsonObject o : lookup.result()) {
                resObject.add(o);
                System.out.println(o.encode());
            }
            final JsonObject resultObject = new JsonObject();
            resultObject.put(ACTION_REPLY_MESSAGE_KEY, actionReplyMessage);
            resultObject.put(ACTION_RESULT_KEY, resObject);


            messageBody.reply(resultObject);


        });


    }


    private void errorHandling(JsonObject actionReplyMessage, AsyncResult<?> lookup) {
        if (lookup.failed()) {
            LOGGER.info(format("Following error occured: '%s'.", lookup.cause().getMessage()));
            actionReplyMessage.put("failure-case", lookup.cause().getMessage());
            actionReplyMessage.put("failed", lookup.failed());

        }
    }

}
