"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const client = new mongodb_1.MongoClient(process.env.MONGO_URI);
exports.default = {
    run: () => {
        const database = client.db("tk-notes");
        return {
            getCollection: (collectionName) => database.collection(collectionName)
        };
    }
};
//# sourceMappingURL=database.js.map