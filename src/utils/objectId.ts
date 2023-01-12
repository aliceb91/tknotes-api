import {ObjectId} from 'mongodb'

export function objectId(str: string) {
  try {
    return new ObjectId(str);
  } catch (e) {
    return str;
  }
}