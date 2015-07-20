var express = require("express");
var server = express();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

// Express

server.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "HEAD,GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Authorization, Content-Type");
    res.header("Allow", "HEAD,GET,POST,PUT,DELETE,OPTIONS");
    next();
});

server.post("/api/newToken", function(req, res) {
	Item.find(function (err, items) {
		if (err) {
			console.log(err);
		}

		// TODO make proper token
		var token = "dkjhgdkighdfg";

		res.setHeader("Content-Type", "text/plain");
        res.end(JSON.stringify(token));
    });
});

server.get("/api/tasks/tim", function(req, res) {
	var tasks = [{"description":"Task description","_id":"1","assignee":"Tim","title":"Report an issue","user_id":"1"}];
	res.setHeader("Content-Type", "application/json");
    return res.send(tasks);
});

server.post("/api/log", jsonParser, function(req, res) {
    console.log(req.body);
    return res.end();
});

var port = 8088;

server.listen(port);
console.log("Listening on port " + port);