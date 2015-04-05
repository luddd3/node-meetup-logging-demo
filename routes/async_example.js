var db = require('../mocks/db');
var logger = require('../logger');

module.exports = function(app) {
	app.get('/async', function(req, res) {
		doDbQuery(function(err, result) {
			if (err != null) {
				logger.error(err);
				res.send('An error occurred');
			} else {
				res.json(result);
			}
		})
	});
}

var doDbQuery = function(callback) {
	logger.debug('Get db client...');
	db.getClient(function(err, client) {
		if (err != null) {
			return callback(err);
		}

		logger.debug('Execute query...');
		client.query(function(err, result) {
			if (err != null) {
				return callback(err);
			}

			throw new Error('another error')
			logger.debug('Close db connection...');
			client.closeConnection(function(err) {
				if (err != null) {
					return callback(err);
				}
				return callback(err, result);
			});
		});
	});
}