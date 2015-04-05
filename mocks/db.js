module.exports = {
	getClient: function(callback) {
		setTimeout(function() {
			return callback(null, client);
		}, 100);
	}
}

var client = {
	query: function(callback) {
		var result = {name: 'node-meetup', value: 1337};
		setTimeout(function() {
			return callback(null, result)
		}, 200);
	},

	closeConnection: function(callback) {
		setTimeout(function() {
			return callback()
		});
	}
}
