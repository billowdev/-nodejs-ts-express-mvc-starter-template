import express, { Express, Request, Response } from 'express';
import { PORT } from './src/common/constants/common.constant';

import App from "./src/app"

const app: Express = App();


app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});