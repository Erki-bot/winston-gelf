const winston = require("winston");

const GelfTransport = require("winston-gelf");

const options = {
  gelfPro: {
    fields: {
      env: "test",
      facility: "XYZ",
      //
    },
    adapterOptions: {
      // this object is passed to the adapter.connect() method
      host: "10.10.25.171", // optional; default: 127.0.0.1
      port: 12201, // optional; default: 12201
    },
  },
};

const gelfTransport = new GelfTransport(options);

const logger = winston.createLogger({
  transports: [new winston.transports.Console(), gelfTransport],
});

logger.log({level: 'warn', message: 'Failed something', error: "KME"});
