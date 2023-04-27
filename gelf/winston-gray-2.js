const winston = require("winston");

var WinstonGraylog2 = require("winston-graylog2");
/*
const gelf = new Gelf({
  graylogPort: 12201,
  graylogHostname: "10.10.25.171",
  connection: "wan",
  maxChunkSizeWan: 1420,
  maxChunkSizeLan: 8154,
});

// send just a shortmessage
gelf.emit("gelf.log", "myshortmessage");

// send a full message
const message = {
  version: "1.0",
  host: "www1",
  short_message: "Short message",
  full_message: "Backtrace here\n\nmore stuff",
  timestamp: Date.now() / 1000,
  level: 1,
  facility: "payment-backend",
  file: "/var/www/somefile.rb",
  line: 356,
  _rc_service: "backend",
  _rc_env: "local",
  _rc_product: "rightdesk",
};
*/
var options = {
  name: "Graylog",
  level: "debug",
  silent: false,
  handleExceptions: false,
  graylog: {
    servers: [{ host: "10.10.25.171", port: 12201 }],
    hostname: "10.10.25.171",
    facility: "rightdesk-backend",
    bufferSize: 8154,
  },
  staticMeta: {
    _rc_service: "backend",
    _rc_env: "dev",
    _rc_product: "rightdesk",
    file: __filename,
    timestamp: Date.now() / 1000,
  },
};

var gelfTransport = new WinstonGraylog2(options);

var logger = winston.createLogger({
  exitOnError: false,
  transports: [new winston.transports.Console(), gelfTransport],
});

logger.info("pourVerification");
