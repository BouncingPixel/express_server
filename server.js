var express = require('express')
	, http = require('http');

var app = express();

var conf = (require('fs').existsSync( './dev_conf.js' ) && require('./dev_conf').conf) || 
           { "port":(process.env.PORT || 8008), "base":"" };

		app.configure(function(){
		app.use(express.static(__dirname + '/public', {redirect: false}));
	});

http.createServer(app).listen(conf.port);

