const bodyParser = require("body-parser");
const express = require("express");

module.exports = (app) => {
    // Middlewares
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(express.static("public"));
  };