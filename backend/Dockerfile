###
# Docker container for this service
# To build:
# sudo docker build -t microservices/backend-service .
# To run:
# sudo docker run -t -i -p 8080:8080 microservices/backend-service
###

# Extend vert.x image
FROM vertx/vertx3

ENV VERTICLE_NAME nl.ebpi.microservices.webserver.WebServer
ENV VERTICLE_FILE target/backend-0.0-SNAPSHOT.jar

# Set the location of the verticles
ENV VERTICLE_HOME /usr/verticles

EXPOSE 8080

# Copy your verticle to the container
COPY $VERTICLE_FILE $VERTICLE_HOME/

# Launch the verticle
WORKDIR $VERTICLE_HOME
ENTRYPOINT ["sh", "-c"]
CMD ["vertx run $VERTICLE_NAME -cp $VERTICLE_HOME/*  -cluster "]
