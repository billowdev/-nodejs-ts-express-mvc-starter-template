"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerOptions = void 0;
const article_document_1 = require("../../modules/article/article.document");
exports.swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'nodejs-ts-express-mvc-starter-template',
            version: '1.0.0',
        },
        paths: {
            "/articles": article_document_1.ArticleApi
        },
        basePath: '/',
        components: {
            schemas: {
                User: article_document_1.ArticleSchema,
                Error: {
                    "type": "object",
                    "properties": {
                        "message": {
                            "type": "string"
                        }
                    }
                },
            },
        },
    },
    apis: ['**/*.ts'],
};
