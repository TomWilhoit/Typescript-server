"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const cors = require("cors");
var unirest = require("unirest");
var key = require("./key")

app.use(cors());
app.use(express.json());

app.set("port", process.env.PORT || 3001);

app.get("/", (req, res) => {
  unirest
    .get("https://wordsapiv1.p.rapidapi.com/words/?random=true")
    .header("X-RapidAPI-Host", "wordsapiv1.p.rapidapi.com")
    .header(
      "X-RapidAPI-Key",
      process.env.APP_APIKEY
    )
    .end(response => {
      res.status(200).send(response);
    });
});

app.listen(3001, function() {
  console.log('Running on localhost:3001');
});

