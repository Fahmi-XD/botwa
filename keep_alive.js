const http = require("http");

const PORT = process.env.PORT || 3003;

http.createServer(function (req, res) {
  res.write("Alive");
  res.end()
}).listen(PORT)