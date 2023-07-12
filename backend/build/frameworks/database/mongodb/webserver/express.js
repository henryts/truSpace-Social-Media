"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const expressConfig = (app) => {
    app.use(express_1.default.json());
    app.use(body_parser_1.default.json({ limit: '10mb' }));
    app.use(body_parser_1.default.urlencoded({ limit: '10mb', extended: true }));
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, cookie_parser_1.default)());
    app.use((0, morgan_1.default)('dev'));
    app.use((0, cookie_session_1.default)({
        name: 'session',
        keys: ['1234'],
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
    }));
    const corsOptions = {
        origin: '*',
        exposedHeaders: [
            'Cross-Origin-Opener-Policy',
            'Cross-Origin-Resource-Policy',
        ],
    };
    app.use((0, cors_1.default)(corsOptions));
};
exports.default = expressConfig;
