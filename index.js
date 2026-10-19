// Tiny HTTP server with no dependencies, just enough to build and run in Docker.
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello from sample-app\n");
});

// Only start listening when run directly, so tests can import this file without opening a port.
if (require.main === module) {
  server.listen(3000, () => console.log("listening on 3000"));
}

module.exports = { server };
