# Extend vert.x image
FROM vertx/vertx3

#
ENV VERTICLE_NAME nl.ebpi.microservices.auth.JDBCAuthService
ENV VERTICLE_FILE backend/target/jdbc-auth-service-0.0-SNAPSHOT.jar

# Set the location of the verticles
ENV VERTICLE_HOME /usr/verticles

EXPOSE 80

# Copy your verticle to the container
COPY $VERTICLE_FILE $VERTICLE_HOME/

# Launch the verticle
WORKDIR $VERTICLE_HOME
ENTRYPOINT ["sh", "-c"]
CMD ["vertx run $VERTICLE_NAME -cp $VERTICLE_HOME/*"]
