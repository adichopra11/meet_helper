﻿const CONSTANTS = {};
CONSTANTS.ENDPOINT = {};

let username = process.env.MONGO_USER
let password = process.env.MONGO_PASS

CONSTANTS.PORT = process.env.PORT || "3001";
CONSTANTS.ENDPOINT.LIST = "/list";
CONSTANTS.DB_URL = process.env.MONGODB_URI || "mongodb+srv://admin:admin@cluster0-xaizu.gcp.mongodb.net/meet_help?retryWrites=true&w=majority";


module.exports = CONSTANTS;
