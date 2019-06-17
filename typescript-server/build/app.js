"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var unirest = require("unirest");
var https = require("https");
var key = require("./key")

app.locals = [1, 2, 3];

console.log(key)

app.get("/", (req, res) => {
  unirest
    .get("https://wordsapiv1.p.rapidapi.com/words/?random=true")
    .header("X-RapidAPI-Host", "wordsapiv1.p.rapidapi.com")
    .header(
      "X-RapidAPI-Key",
      key
    )
    .end(response => {
      res.status(200).send(response.body);
    });
});

app.listen(3001, function() {
  console.log(key);
});
