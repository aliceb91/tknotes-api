import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_URI as string);

export default {
  run: () => {
    const database = client.db("tk-notes");
    return {
      getCollection: (collectionName: string) => database.collection(collectionName)
    };
  } 
}
