package io.vertx.example.util;

import io.vertx.core.VertxOptions;
import io.vertx.ext.dropwizard.DropwizardMetricsOptions;

/*
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class Runner {

  public static final VertxOptions DROPWIZARD_OPTIONS = new VertxOptions().
      setMetricsOptions(new DropwizardMetricsOptions().setEnabled(true));

  private static final String METRICS_EXAMPLES_DIR = "metrics-examples";
  private static final String METRICS_EXAMPLES_JAVA_DIR = METRICS_EXAMPLES_DIR + "/src/main/java/";


  public static void runClusteredExample(Class clazz) {
    ExampleRunner.runJavaExample(METRICS_EXAMPLES_JAVA_DIR, clazz, true);
  }

  public static void runExample(Class clazz) {
    ExampleRunner.runJavaExample(METRICS_EXAMPLES_JAVA_DIR, clazz, false);
  }
}
