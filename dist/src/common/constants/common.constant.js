"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALLOWED_ORIGINS = exports.PREFIX = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = process.env.PORT;
exports.PREFIX = '/api/v1';
exports.ALLOWED_ORIGINS = (_a = process.env.ALLOWED_ORIGINS) === null || _a === void 0 ? void 0 : _a.split(',');
