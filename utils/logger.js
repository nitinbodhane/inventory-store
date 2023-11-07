const winston = require('winston');

const { createLogger, format, transports } = winston;
const { loggerLevel } = require('../config').loggerConfig();

const logLevel = loggerLevel || 'info';

const logTransports = [
  new transports.File({ filename: 'logs/app.log' }),
  new transports.File({ filename: 'logs/system.log', level: 'warn' }),
  new transports.File({ filename: 'logs/error.log', level: 'error' }),
  new transports.File({ filename: 'logs/access.log', level: 'verbose' }),
  new transports.File({ filename: 'logs/performance.log' }),
];

if (process.env.NODE_ENV !== 'production') {
  // Add console transport for non-production environments (e.g., development, testing)
  logTransports.push(new transports.Console());
}

const logger = createLogger({
  level: logLevel,
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(
      ({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`,
    ),
  ),
  transports: logTransports,
});

module.exports = logger;
