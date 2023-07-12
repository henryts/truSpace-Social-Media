"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./frameworks/database/mongodb/connection"));
const http_1 = __importDefault(require("http"));
const server_1 = __importDefault(require("./frameworks/database/mongodb/webserver/server"));
const express_2 = __importDefault(require("./frameworks/database/mongodb/webserver/express"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
(0, connection_1.default)();
(0, express_2.default)(app);
(0, server_1.default)(server).startServer();
