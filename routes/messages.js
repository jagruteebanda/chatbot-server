const express = require("express");
const router = express.Router();
const init = require("../init/initialize");

router.get("/create", function(req, res, next) {
    init.chatkit.sendSimpleMessage({
        userId: 'alice',
        roomId: '123',
        text: 'hello!',
      })
        .then(res => console.log('sent message with id', res.id))
        .catch(err => console.error(err))
}