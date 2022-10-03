const http = require("http");
require("dotenv").config();

const { mongoConnect } = require("./config/db");

const app = require("./app");
const PORT = process.env.PORT;

const server = http.createServer(app);

const start = async () => {
  await mongoConnect();
  server.listen(PORT, () => {
    console.log(`Listening on port:${PORT}...`);
  });
}

start();
