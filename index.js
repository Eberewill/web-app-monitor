/**
 * API Primary file
 */
//Dependencies
var http = require("http");
var url = require("url");
var stringDecoder = require("string_decoder").StringDecoder;

// server should respond to all request with a string
var server = http.createServer((req, res) => {
  //get url and parse it
  // var parsedUrl = new URL(req.url);
  var parsedUrl = url.parse(req.url, true);

  //get the path
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g, "");

  //get the request method
  var reqMethod = req.method.toLocaleLowerCase();

  //request header
  var reqHeader = req.headers;

  //Get Request Querry string as object
  var querryStringObj = parsedUrl.query;

  //handling request payload
  var decoder = new stringDecoder("utf-8");

  //intiate a buffer iplaceholder for sting
  var buffer = "";

  //listen to an event emitted data
  req.on("data", (data) => {
    buffer += decoder.write(data);
  });

  req.on("end", () => {
    buffer += decoder.end();
    res.end("hello world of event emitter");
  });
});

//start the server and have it listen to port 3000

server.listen(3000, () => {
  console.log("server listening to port 3000 now");
});
