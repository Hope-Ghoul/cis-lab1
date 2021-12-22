var http = require("http"),
  url = require("url");

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

var now = new Date();
var dayofweek = now.getDay();

//create a server object:
http
  .createServer(function (req, res) {
    var query = url.parse(req.url, true).query;
    res.write("Hello ");
    if ("name" in query) {
      res.write(query["name"]);
    } else {
      res.write("Dmitry");
    }
    res.write(", today is ");
    res.write(days[dayofweek]);
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
