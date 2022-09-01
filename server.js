/** @format */

const PORT = 8080;
const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  console.log("Home Page");
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("sendMessage", (data) => {
    socket.broadcast.emit("receiveMessage", data);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
