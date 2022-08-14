import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
app.use(express.static("client"));

const httpServer = http.createServer(app);
const socketIO = new Server(httpServer);

httpServer.listen(3000, () => {
  console.log("Server listening on port 3000");
});
app.get("/", (req, res) => {
  res.sendFile(process.env.npm_config_local_prefix + "/index.html");
});

socketIO.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  // broadcast messages to all connected clients
  socket.on("chat message", (msg) => {
    socketIO.emit("chat message", msg);
  });
});
