require("dotenv").config();

const http = require("http");
const app = require("./app");

const PORT = process.env.PORT;

const server = http.createServer(app);

// Start app with http server
async function startServer() {
  server.listen(PORT, () => {
    console.log(`Listening on port:${PORT}...`);
  });
}

startServer();
