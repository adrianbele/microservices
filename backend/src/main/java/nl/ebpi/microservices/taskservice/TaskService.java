package nl.ebpi.microservices.taskservice;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.AsyncResult;
import io.vertx.core.eventbus.EventBus;
import io.vertx.core.eventbus.Message;
import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.mongo.MongoClient;

import java.util.LinkedList;
import java.util.List;
import java.util.logging.Logger;

import static java.lang.String.format;

/**
 * Service which offers crud operations to deal with tasks
 */
public class TaskService extends AbstractVerticle {

    private final static Logger LOGGER = Logger.getLogger(TaskService.class.getName());

    public static final String TASK_SERVICE_ADDRESS = "task-service-address";
    public static final String ACTION_UPDATE = "update";
    public static final String ACTION_ADD = "add";
    public static final String ACTION_REMOVE = "remove";
    public static final String ACTION_RETRIEVE = "retrieve";
    public static final String ACTION_KEY = "action";
    public static final String ACTION_RESULT_KEY = "actionResult";
    public static final String ACTION_REPLY_MESSAGE_KEY = "actionReplyMessage";
    private MongoClient mongoClient;


    @Override
    public void start() throws Exception {
        mongoClient = MongoClient.createShared(vertx, new JsonObject().put("db_name", "tasks_db"));

        EventBus eventBus = vertx.eventBus();
        eventBus.consumer(TASK_SERVICE_ADDRESS, message -> {
            handleQuery(message);


        });


    }

    private void handleQuery(Message<Object> message) {

        String action = message.headers().get(ACTION_KEY);

        final JsonObject actionReplyMessage = new JsonObject().put(ACTION_KEY, action);

        switch ( action ) {
            case ACTION_UPDATE:
                JsonObject updateTask = update(message, actionReplyMessage);
                message.reply(updateTask);
            case ACTION_ADD:
                JsonObject addTask = addTask(message, actionReplyMessage);
                message.reply(addTask);
            case ACTION_REMOVE:
                JsonObject removeTask = removeTask(message, actionReplyMessage);
                message.reply(removeTask);
            case ACTION_RETRIEVE:
                JsonObject retrieveTasks = retrieveTasksByUserId(message, actionReplyMessage);
                message.reply(retrieveTasks);
            default:
                LOGGER.info(format("Unsupported operation '%s'.", action));
                actionReplyMessage.put("failure-case", "Unknown action");
                actionReplyMessage.put("failed", "true");
                message.reply(new JsonArray().add(actionReplyMessage));
        }


    }

    private JsonObject removeTask(final Message<Object> messageBody, final JsonObject actionReplyMessage) {
        final JsonObject resultObject = new JsonObject().put(ACTION_REPLY_MESSAGE_KEY, actionReplyMessage);
        // Remove a document from mongo.
        // messageBody contains the task id
        mongoClient.removeOne("tasks", new JsonObject().put("_id", messageBody.body()), lookup -> {
            // error handling
            errorHandling(actionReplyMessage, lookup);


        });

        return resultObject;
    }

    private JsonObject update(final Message<Object> messageBody, final JsonObject actionReplyMessage) {
        final JsonObject resultObject = new JsonObject().put(ACTION_REPLY_MESSAGE_KEY, actionReplyMessage);
        // Create a new document on mongo.
        // insert into mongo

        JsonObject taksObject = (JsonObject) messageBody.body();
        mongoClient.replace("tasks", new JsonObject().put("_id", messageBody.body()), taksObject, lookup -> {
            // error handling
            errorHandling(actionReplyMessage, lookup);

        });
        return resultObject;

    }


    private JsonObject addTask(final Message<Object> messageBody, final JsonObject actionReplyMessage) {
        final JsonObject resultObject = new JsonObject().put(ACTION_REPLY_MESSAGE_KEY, actionReplyMessage);
        // Create a new document on mongo.
        // insert into mongo
        mongoClient.insert("tasks", (JsonObject) messageBody.body(), lookup -> {
            // error handling
            errorHandling(actionReplyMessage, lookup);

            resultObject.put(ACTION_RESULT_KEY, new JsonObject().put("_id", lookup.result()));
        });
        return resultObject;

    }


    private JsonObject retrieveTasksByUserId(final Message<Object> messageBody, final JsonObject actionReplyMessage) {
        final JsonObject resultObject = new JsonObject().put(ACTION_REPLY_MESSAGE_KEY, actionReplyMessage);
        JsonObject body = (JsonObject) messageBody.body();
        mongoClient.find("tasks", new JsonObject().put("_id", messageBody.body()), lookup -> {
            // error handling
            errorHandling(actionReplyMessage, lookup);
            JsonArray resObject = new JsonArray();
            lookup.result().stream().map(result -> resObject.add(result));
            resultObject.put(ACTION_RESULT_KEY, resultObject);

        });

        return resultObject;
    }


    private void errorHandling(JsonObject actionReplyMessage, AsyncResult<?> lookup) {
        if (lookup.failed()) {
            LOGGER.info(format("Following error occured: '%s'.", lookup.cause().getMessage()));
            actionReplyMessage.put("failure-case", lookup.cause().getMessage());
            actionReplyMessage.put("failed", lookup.failed());

        }
    }



}
