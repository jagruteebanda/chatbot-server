const express = require("express");
const router = express.Router();
const init = require("../init/initialize");

router.post("/sendmessage", function(req, res, next) {
  init.chatkit
    .sendSimpleMessage({
      userId: req.body.userId,
      roomId: req.body.roomId,
      text: req.body.message
    })
    .then(res => {
      console.log("sent message with id", res.id);
      res.send({
        code: 200,
        message: "Sent message successfully",
        msgId: res.id
      });
    })
    .catch(err => {
      res.send({
        code: 403,
        message: "Error in sending message",
        error: err
      });
    });
});

router.post("/getmessages", function(req, res, next) {
  init.chatkit
    .fetchMultipartMessages({
      roomId: room.id,
      limit: 10
    })
    .then(messages => {
      console.log("got last 10 messages");
      for (let m of messages) {
        renderMessage(m);
      }
      return chatkit.fetchMultipartMessages({
        roomId: room.id,
        initialId: res[messages.length - 1].id
      });
    })
    .then(moreMessages => {
      console.log("got the next 10 messages before them");
      for (let m of moreMessages) {
        renderMessage(m);
      }
    })
    .catch(err => console.error(err));
});
