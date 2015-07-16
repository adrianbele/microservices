###
# Docker container for this service
# To build:
# sudo docker build -t microservices/task-service .
# To run:
# sudo docker run --link mongodb -t -i microservices/task-service
###

# Extend vert.x image
FROM vertx/vertx3

ENV VERTICLE_NAME nl.ebpi.microservices.taskservice.TaskService
ENV VERTICLE_FILE target/task-service-0.0-SNAPSHOT.jar

# Set the location of the verticles
ENV VERTICLE_HOME /usr/verticles

# Copy your verticle to the container
COPY $VERTICLE_FILE $VERTICLE_HOME/

# Launch the verticle
WORKDIR $VERTICLE_HOME
ENTRYPOINT ["sh", "-c"]
CMD ["vertx run $VERTICLE_NAME -cp $VERTICLE_HOME/*  -cluster "]
