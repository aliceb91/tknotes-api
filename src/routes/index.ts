import express from 'express';
import homePage from './homepage/homepage'
import getMoves from './get-moves/get-moves'
import getCharacters from './get-characters/get-characters'
const router = express.Router();

router.get('/', homePage);
router.get('/moves/:character', getMoves)
router.get('/charList', getCharacters)

export {router};