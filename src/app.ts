import express, { Express, Request, Response } from "express"
import { ALLOWED_ORIGINS, PREFIX } from "./common/constants/common.constant";
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { swaggerOptions } from "./common/config/swagger.config";
import articleController from "./modules/article/controllers/article.controller";

const App = () => {
	const app: Express = express();

	const allowedOrigins: string[] = ALLOWED_ORIGINS

	app.use(cors(
		{
			origin: function (origin: any, callback: any) {
				if (!origin || allowedOrigins.indexOf(origin) !== -1) {
					callback(null, true);
				} else {
					callback(new Error('Not allowed by CORS'));
				}
			}
		}
	))

	const swaggerSpec = swaggerJSDoc(swaggerOptions);
	app.use(`${PREFIX}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
	
	app.use(`${PREFIX}/articles`, articleController)

	
	app.get('/', (req: Request, res: Response) => {
		// res.send(`<h3>Nodejs typescript restful service using Express with MVC pattern starter template was launched</h3>`);
		res.redirect(`${PREFIX}/docs`)
	});



	// app.use()

	return app
}
export default App