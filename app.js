const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const usersController = require("./app/user/inventory.controller");
const inventoryController = require("./app/inventory/inventory.controller");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", usersController);
app.use("/api", inventoryController);

module.exports = app;
