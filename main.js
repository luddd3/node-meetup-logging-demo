var express = require('express');
var app = express();
var logger = require('./logger');

// This will be used later on to catch uncaught exceptions
// process.on('uncaughtException', function(err) {
// 	logger.fatal(err);
// 	process.exit(1);
// });

// Add log output routes
require('./routes/log_output')(app)

// Add async example route
require('./routes/async_example')(app)

// Start server
var server = app.listen(3000, function() {
	var host = 'localhost'
	var port = server.address().port
	logger.info('Web server listening at http://%s:%s', host, port);
});
