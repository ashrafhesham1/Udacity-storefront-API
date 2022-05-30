"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var router_1 = __importDefault(require("./Routes/router"));
var config_1 = __importDefault(require("./config"));
var configs = (0, config_1["default"])();
var app = (0, express_1["default"])();
var host = configs.serverHost;
var port = configs.serverPort;
var address = "http://".concat(host, ":").concat(port);
app.use(body_parser_1["default"].json());
app.use((0, cors_1["default"])());
app.get("/", function (req, res) {
    res.send("Please visit '/api' to start using the storefront api");
});
app.use("/api", router_1["default"]);
app.listen(port, function () {
    console.log("starting app on: ".concat(address));
});
exports["default"] = app;
