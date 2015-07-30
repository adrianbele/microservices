/*
 * Copyright 2014 Red Hat, Inc.
 *
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  and Apache License v2.0 which accompanies this distribution.
 *
 *  The Eclipse Public License is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  The Apache License v2.0 is available at
 *  http://www.opensource.org/licenses/apache2.0.php
 *
 *  You may elect to redistribute this code under either of these licenses.
 */

package io.vertx.example.metrics.dashboard;

import com.hazelcast.internal.metrics.impl.MetricsRegistryImpl;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.Vertx;
import io.vertx.core.VertxOptions;
import io.vertx.core.http.HttpServer;
import io.vertx.core.json.JsonObject;
import io.vertx.core.metrics.MetricsOptions;
import io.vertx.ext.dropwizard.DropwizardMetricsOptions;
import io.vertx.ext.dropwizard.MetricsService;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.StaticHandler;
import io.vertx.ext.web.handler.sockjs.BridgeOptions;
import io.vertx.ext.web.handler.sockjs.PermittedOptions;
import io.vertx.ext.web.handler.sockjs.SockJSHandler;

import java.util.Random;
import java.util.function.Consumer;
import java.util.logging.Level;

/**
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class Dashboard extends AbstractVerticle {

  @Override
  public void start() {
    Consumer<Vertx> runner = vertx -> {
      try {
        vertx.deployVerticle("dashboard.js");

      } catch (Throwable t) {
        System.out.println(t);

      }
    };
    DropwizardMetricsOptions metrics1 = new DropwizardMetricsOptions().
            setEnabled(true);
    VertxOptions options = new VertxOptions().setClustered(true).setMetricsOptions(metrics1);

    if (options.isClustered()) {
      Vertx.clusteredVertx(options, res -> {
        if (res.succeeded()) {
          Vertx vertx = res.result();
          runner.accept(vertx);
        } else {
          res.cause().printStackTrace();
        }
      });
    }


    runner.accept(vertx);
  }

}
