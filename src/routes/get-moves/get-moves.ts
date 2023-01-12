import { Request, Response } from "express";
import db from "../../utils/db";

export default async (req : Request, res: Response) => {
  const character = req.params.character
  const moves = await db.getCollection('frame-data').find({characterName: character}).toArray();
  res.json(moves)
}