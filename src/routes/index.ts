import express from 'express';
import homePage from './homepage/homepage'
import getMoves from './get-moves/get-moves'
const router = express.Router();

router.get('/', homePage);
router.get('/moves/:character', getMoves)

export {router};