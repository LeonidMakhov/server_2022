import express from 'express';
import errorHandler from './modules/core/errorHandler';
import logger from './modules/core/logger';
import parseResponse from './modules/core/parseResponse';
import cors from './modules/core/cors';
import routes from './modules/core/routes';
import dbConnect from './modules/core/db';

const app = express();
const PORT = 4000;

dbConnect();
logger(app);
parseResponse(app);
cors(app);
routes(app); //1
errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example App at http://localhost:${PORT}`);
});
