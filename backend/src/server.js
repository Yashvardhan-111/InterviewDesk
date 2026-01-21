import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";
import { log } from "console";

const app=express();

app.get("/h", (req, res) => res.send("OK"));

const __dirname = path.resolve();
console.log(__dirname);

// make app ready for deployment
if (ENV.NODE_ENV === "production") {
    //locate react files and respond to get request using it 
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}


app.listen(ENV.PORT, ()=>console.log("Server running on port ", ENV.PORT)); 