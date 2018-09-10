const express = require('express');
const log4js = require('log4js');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

/**
 * Enable CORS for all routes
 */
app.use(cors());

/**
 * Enable the use of body parser to get POST params
 */
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/**
 * Setup routes
 */
app.use('/users', auth_utils.authorizeHeader, users_routes);



/**
 * Setup logger
 */
const logger = log4js.getLogger('http');
app.use(log4js.connectLogger(logger));

/**
 * Catch 404 and forward to error handler
 */
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/**
 * Error handlers
 */
app.use(function (err, req, res) {
  res.status(err.status || 500)
    .json({
      success: false,
      message: err.message,
      code: err.status
    });
});

module.exports = app;