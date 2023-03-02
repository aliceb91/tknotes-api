"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const get_moves_1 = __importDefault(require("./get-moves/get-moves"));
const get_characters_1 = __importDefault(require("./get-characters/get-characters"));
const router = express_1.default.Router();
exports.router = router;
router.get('/moves/:character', get_moves_1.default);
router.get('/charList', get_characters_1.default);
//# sourceMappingURL=index.js.map