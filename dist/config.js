"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var config = function () {
    return {
        databaseHost: process.env.POSTGRES_HOST,
        databasePort: process.env.POSTGRES_PORT,
        databaseUser: process.env.POSTGRES_USER,
        databasePassword: process.env.POSTGRES_PASSWORD,
        database: (process.env.ENVIRONMENT === "test"
            ? process.env.POSTGRES_DB_TEST
            : process.env.POSTGRES_DB),
        serverHost: process.env.SERVER_HOST,
        serverPort: process.env.SERVER_PORT,
        tokenSecret: process.env.TOKEN_SECRET
    };
};
exports["default"] = config;
