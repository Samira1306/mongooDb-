const express = require("express");
const config = require("config");

const app = express();
const port = config.get("server-port");

app.get("/", (req, res, next) => {
    res.send("Welcome to academic rest api.");
});
const controller = require("./controller/logic/pets.controller")
 app.get("/pet"), (req, res, next) => {
    controller.getAll(req, res, next);
 }
 app.post("/pets"), (req, res, next) => {
    controller.createPet(req, res, next);
 }
app.listen(port, () => {
    console.log("Server is runnig...")
})