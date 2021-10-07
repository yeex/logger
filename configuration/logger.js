const appRoot = require('app-root-path');
require('winston-daily-rotate-file');
const { 
    createLogger, 
    transports, 
    format }  = require('winston');

const logger = createLogger({
    transports: [
        new transports.DailyRotateFile({
            filename: 'error.log',
            dirname: `${appRoot}/logs archive/`,
            level: 'info',
            handleExceptions: true,
            format: format.combine(format.timestamp(), format.json()),
            zippedArchive: true,
            maxSize: 1048
        })
    ], exitOnError: false
})

module.exports = logger;