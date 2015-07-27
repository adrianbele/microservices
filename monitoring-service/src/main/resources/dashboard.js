var MetricsService = require("vertx-dropwizard-js/metrics_service");
var Router = require("vertx-web-js/router");
var SockJSHandler = require("vertx-web-js/sock_js_handler");
var StaticHandler = require("vertx-web-js/static_handler");


var service = MetricsService.create(vertx);
service
//console.log(vertx.isMetricsEnabled());
var router = Router.router(vertx);

// Allow outbound traffic to the news-feed address

var options = {
  "outboundPermitteds" : [
    {
      "address" : "metrics"
    }
  ]
};

router.route("/eventbus/*").handler(SockJSHandler.create(vertx).bridge(options).handle);

// Serve the static resources
router.route().handler(StaticHandler.create().handle);

var httpServer = vertx.createHttpServer();
httpServer.requestHandler(router.accept).listen(8383);

// Send a metrics events every second
vertx.setPeriodic(1000, function (t) {
  var metrics = service.getMetricsSnapshot(vertx.eventBus());

  vertx.eventBus().publish("metrics", metrics);
});


