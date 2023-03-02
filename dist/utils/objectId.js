"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectId = void 0;
const mongodb_1 = require("mongodb");
function objectId(str) {
    try {
        return new mongodb_1.ObjectId(str);
    }
    catch (e) {
        return str;
    }
}
exports.objectId = objectId;
