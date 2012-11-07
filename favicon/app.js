var http = require("http");
var addFive = require("./addFive")
var faviconBasic = require("./faviconbasic")
var faviconPath = '/favicon.ico';

var server = http.createServer(function(request, response) {

  if(faviconPath == request.url)
  {
  	faviconBasic.favicon(request, response);
  }
  else
  {
  	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World \n");
	response.write("Number added to five: " + addFive.addX(10))
	response.end();
	console.log('sent response');
  }
})

server.listen(8888);
console.log('server is listening on 8888');

