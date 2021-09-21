import express from "express";
import "module-alias/register";
import app from "./app";
import config from "./config";
import { createServer } from "http";
const httpServer = createServer();
if (process.env.NODE_ENV == "production") {
  app.use(express.static("src/client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "src/client", "build", "index.html"));
  });
}
httpServer.listen(config.PORT, () => {
  console.log("server started at port", config.PORT);
});
