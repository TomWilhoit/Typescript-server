"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();

app.locals = [1,2,3]

app.get('/', function (req, res) {
    res.send(app.locals);
});

app.listen(3001, function () {
    console.log('Running on port 3001');
});
