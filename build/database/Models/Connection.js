"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const MONGO_DB_URL = 'mongodb://db:27017';
const connectToDatabase = async (mongoDatabaseURI = process.env.MONGO_DB_URL || MONGO_DB_URL) => {
    try {
        await mongoose_1.default.connect(mongoDatabaseURI, {
            dbName: 'online_menu',
            connectTimeoutMS: 10000,
        });
        console.log('Connecting to database...');
    }
    catch (error) {
        console.error('Error connecting to database', error);
    }
};
exports.default = connectToDatabase;
//# sourceMappingURL=Connection.js.map