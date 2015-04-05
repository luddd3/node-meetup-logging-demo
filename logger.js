var bunyan = require('bunyan');

var logger = bunyan.createLogger({
	name: 'node-meetup',
	streams: [
		{
			level: 'debug',
			stream: process.stdout
		},
		{
			level: 'error',
			path: './node-meetup.log'
		}
	]
});

module.exports = logger;

