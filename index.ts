import express, { Express, Request, Response } from 'express';
import { PORT } from './src/common/constants/common.constant';
import db from "./src/models"
import App from "./src/app"

const app: Express = App();

db.sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
	});
})