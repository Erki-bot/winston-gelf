const Gelf = require("gelf");
const gelf = new Gelf({
  graylogPort: 12201,
  graylogHostname: "10.10.25.171",
  connection: "wan",
  maxChunkSizeWan: 1420,
  maxChunkSizeLan: 8154,
});

module.exports = { gelf };

