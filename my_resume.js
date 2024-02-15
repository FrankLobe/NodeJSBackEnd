import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiRoutes from './routes/api_routes.js';

const myResume = express();
myResume.use(bodyParser.json());
myResume.use(cors({ origin: '*'}));
myResume.use(apiRoutes);
myResume.listen(8000);
