'use strict';
/**
 * Module dependencies.
 */
var init = require('./config/init')(),
	config = require('./config/config'),
	mongoose = require('mongoose'),
	chalk = require('chalk');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Bootstrap db connection
var db = mongoose.connect(config.db, function(err) {
	if (err) {
		console.error(chalk.red('Could not connect to MongoDB!'));
		console.log(chalk.red(err));
	}
});

// Init the express application
var app = require('./config/express')(db);

// Bootstrap passport config
require('./config/passport')();

// Start the app by listening on <port>
app.listen(config.port);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('MEAN.JS application started on port ' + config.port);

var Uber = require('node-uber');

var uber = new Uber({
  client_id: 'WqZA5bBnlVOwj5H9A2ondWI3_oa8QMXm',
  client_secret: 'RuooXCT9q1iB53o3HWdlJE3XNuY22u1WqOZlhhjR',
  server_token: 'Y2gCLsgqQB7nyMjduRt1jspsfepAVrU_ibpgr7uh',
  redirect_uri: 'http://localhost:3000/#!/',
  name: 'Codrinks'
});

uber.estimates.price({ 
  start_latitude: 3.1357, start_longitude: 101.6880, 
  end_latitude: 3.0833, end_longitude: 101.6500 
}, function (err, res) {
  if (err) console.error(err);
  else{ console.log(res);
  	console.log(1);
  	console.log("the price is" + res.prices[1].high_estimate);

  	};
});