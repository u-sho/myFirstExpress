import express from "express";
import http from "http";

const app = express();
app.use(express.static("public"));

const server = http.createServer(app);

// app.get("/", (req, res) => {
//   res.sendFile(process.env.npm_config_local_prefix + "/index.html");
// });

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
