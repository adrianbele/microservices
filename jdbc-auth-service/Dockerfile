###
# Docker container for this service
# To build:
# sudo docker build -t microservices/jdbc-auth-service .
# To run:
# sudo docker run --link mongodb -t -i microservices/jdbc-auth-service
###

# Extend vert.x image
FROM vertx/vertx3

ENV VERTICLE_NAME nl.ebpi.microservices.auth.JDBCAuthService
ENV VERTICLE_FILE target/jdbc-auth-service-0.0-SNAPSHOT.jar

ENV JDBC_DRIVER_JAR hsqldb-2.3.2.jar

# Set the location of the verticles
ENV VERTICLE_HOME /usr/verticles

ENV DEP /usr/dep

# Copy your verticle to the container
COPY $VERTICLE_FILE $VERTICLE_HOME/

COPY $JDBC_DRIVER_JAR $DEP/

ENV CLASSPATH=/usr/dep/hsqldb-2.3.2.jar:${CLASSPATH}

# Launch the verticle
WORKDIR $VERTICLE_HOME
ENTRYPOINT ["sh", "-c"]
CMD ["vertx run $VERTICLE_NAME -cp $VERTICLE_HOME/*  -cluster "]
