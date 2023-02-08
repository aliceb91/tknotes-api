import express from 'express';
import getMoves from './get-moves/get-moves'
import getCharacters from './get-characters/get-characters'
const router = express.Router();

router.get('/moves/:character', getMoves)
router.get('/charList', getCharacters)

export {router};