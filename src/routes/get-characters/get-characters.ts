import { Request, Response } from "express";
import db from "../../utils/db";

export default async (req: Request, res: Response) => {
  const charList = await db.getCollection('frame-data').distinct("characterName");
  console.log(charList)
  res.json(charList);
}