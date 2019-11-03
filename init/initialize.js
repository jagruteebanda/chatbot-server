const Chatkit = require('@pusher/chatkit-server');
const config = require('../config/config');

const mongoClient = require('mongodb').MongoClient;

const chatkit = new Chatkit.default({
    instanceLocator: config.globals.CHATKIT_INSTANCE_LOCATOR,
    key: config.globals.CHATKIT_SECRET_KEY,
})

module.exports = {
    chatkit,
    mongoClient
}