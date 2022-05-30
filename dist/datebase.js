"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var pg_1 = require("pg");
var config_1 = __importDefault(require("./config"));
var configs = (0, config_1["default"])();
var client = new pg_1.Pool({
    host: configs.databaseHost,
    database: configs.database,
    user: configs.databaseUser,
    password: configs.databasePassword,
    port: configs.databasePort
});
exports["default"] = client;
