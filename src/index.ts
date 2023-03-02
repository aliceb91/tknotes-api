import * as dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import cors from 'cors';
import {router} from './routes';

export const app = express();

app.use(cors());
app.use('/', router);
const port = 8000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app