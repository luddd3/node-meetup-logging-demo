var logger = require('../logger');

module.exports = function(app) {
	app.get('/', function(req, res) {
		var msg = 'GET /';
		logger.info(msg);
		res.send(msg);
	});

	app.get('/trace', function(req, res) {
		var msg = 'GET /trace';
		logger.trace(msg);
		res.send(msg);
	});

	app.get('/debug', function(req, res) {
		var msg = 'GET /debug';
		logger.debug(msg);
		res.send(msg);
	});

	app.get('/info', function(req, res) {
		var msg = 'GET /info';
		logger.info(msg);
		res.send(msg);
	});

	app.get('/warn', function(req, res) {
		var msg = 'GET /warn';
		logger.warn(msg);
		res.send(msg);
	});

	app.get('/error', function(req, res) {
		var msg = 'GET /error';
		logger.error(msg);
		res.send(msg);
	});

	app.get('/fatal', function(req, res) {
		var msg = 'GET /fatal';
		logger.fatal(msg);
		res.send(msg);
	});
}
