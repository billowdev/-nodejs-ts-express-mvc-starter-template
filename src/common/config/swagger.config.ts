import { ArticleApi, ArticleSchema } from "../../modules/article/article.document";


export const swaggerOptions = {
	swaggerDefinition: {
		openapi: '3.0.0',
		info: {
			title: 'nodejs-ts-express-mvc-starter-template',
			version: '1.0.0',
		},
		paths: {
			"/articles": ArticleApi
		},
		basePath: '/',
		components: {
			schemas: {
				User: ArticleSchema,
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
}

