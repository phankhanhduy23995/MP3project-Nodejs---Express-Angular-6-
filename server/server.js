/**
 * Module dependencies.
 */
const http = require('http');
const log4js = require('log4js');
const fs = require('fs');
const app = require('./app');

/**
 * Make a log directory, just in case it isn't there.
 */
try {
  fs.mkdirSync('./logs');
} catch (e) {
  if (e.code != 'EEXIST') {
    process.exit(1);
  }
}

/**
 * Initialise log4js first, so we don't miss any log messages
 */
log4js.configure('./config/log4js.json');
const logger = log4js.getLogger('server');

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '2101');
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function () {
  logger.info('Express server listening on port', port);
});
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
