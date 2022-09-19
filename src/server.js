require('dotenv').config();
const http = require("http");
const app = require("./app")

const PORT = process.env.PORT;

const server = http.createServer(app);

async function startServer() {
  server.listen(PORT, () => {
    console.log(`Express server listening on port:${PORT}...`);
  });
}

startServer();
