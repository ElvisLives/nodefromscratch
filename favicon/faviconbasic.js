var fs = require('fs');
var path = '/favicon.ico';
var fullPath = __dirname + '\\favicon.ico';
module.exports.favicon = function favicon(req, resp){
	if(path == req.url){
		console.log(fullPath);
		console.log('favicon calls working');

		fs.readFile(fullPath, function(err, buf){
          if (err) {
          	console.log(err);
          }
          icon = {
            headers: {
                'Content-Type': 'image/x-icon'
              , 'Content-Length': buf.length
            },
            body: buf
          };
          console.log('did i get here')
          resp.writeHead(200, icon.headers);
          resp.end(icon.body);
      });
	}
}
