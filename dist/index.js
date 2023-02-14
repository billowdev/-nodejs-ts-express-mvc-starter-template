"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_constant_1 = require("./src/common/constants/common.constant");
const app_1 = __importDefault(require("./src/app"));
const app = (0, app_1.default)();
app.listen(common_constant_1.PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${common_constant_1.PORT}`);
});
