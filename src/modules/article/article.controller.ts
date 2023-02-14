import express, { Request, Response, Express } from 'express';
import { ApiPath, ApiOperationGet } from 'swagger-express-ts';
import { swaggerOptions } from './../../common/config/swagger.config';


const articleController = async (app: Express) => {

	app.get(
		'/',
		async (req: Request, res: Response, next: () => void) => {
			// const response = await articleService.fetchArticles()
			const response = "";
			return response
			next();
		},
	);
}
export default articleController



