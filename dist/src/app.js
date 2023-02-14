"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const common_constant_1 = require("./common/constants/common.constant");
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_config_1 = require("./common/config/swagger.config");
const article_controller_1 = __importDefault(require("./modules/article/article.controller"));
const App = () => {
    const app = (0, express_1.default)();
    const allowedOrigins = common_constant_1.ALLOWED_ORIGINS;
    app.use((0, cors_1.default)({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.indexOf(origin) !== -1) {
                callback(null, true);
            }
            else {
                callback(new Error('Not allowed by CORS'));
            }
        }
    }));
    const swaggerSpec = (0, swagger_jsdoc_1.default)(swagger_config_1.swaggerOptions);
    app.use(`${common_constant_1.PREFIX}/docs`, swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    app.use(`${common_constant_1.PREFIX}/articles`, article_controller_1.default);
    app.get('/', (req, res) => {
        // res.send(`<h3>Nodejs typescript restful service using Express with MVC pattern starter template was launched</h3>`);
        res.redirect(`${common_constant_1.PREFIX}/docs`);
    });
    // app.use()
    return app;
};
exports.default = App;
