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

server.get("/api/newToken", function(req, res) {
	var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ";
    res.setHeader("Content-Type", "text/plain");
    res.end(JSON.stringify(token));
});

server.get("/api/tasks/tim", function(req, res) {
	var tasks = {"actionResult":[{"description":"Task description","_id":"1","assignee":"Tim","title":"Report an issue","user_id":"1"}]};
	res.setHeader("Content-Type", "application/json");
    return res.send(tasks);
});

server.post("/api/tasks/tim", function(req, res) {
    console.log(req.body);
    var obj = {"actionResult":{"_id": "nodejs" + Math.floor(Math.random() * 111111)}};
    return res.send(obj);
});

server.put("/api/tasks/tim", function(req, res) {
    console.log(req.body);
    return res.end();
});

server.post("/api/log", jsonParser, function(req, res) {
    console.log(req.body);
    return res.end();
});

var port = 8080;

server.listen(port);
console.log("Listening on port " + port);