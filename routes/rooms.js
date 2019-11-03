const express = require("express");
const router = express.Router();
const init = require("../init/initialize");

router.post("/create", function(req, res, next) {
  init.chatkit
    .createRoom({
      id: "my-room",
      creatorId: "userId",
      name: "my room",
      customData: { foo: 42 }
    })
    .then(() => {
      console.log("Room created successfully");
      res.send({
        code: 200,
        message: "Room created successfully"
      });
    })
    .catch(err => {
      console.log(err);
      res.send({
        code: 403,
        message: "Error in creating room",
        error: err
      });
    });
});

router.post("/update", function(req, res, next) {
  init.chatkit
    .updateRoom({
      id: req.body.roomId,
      name: "Members only",
      isPrivate: true,
      customData: req.body.customData || {}
    })
    .then(() => {
      console.log("Room updated successfully");
      res.send({
        code: 200,
        message: "Room updated successfully"
      });
    })
    .catch(err => {
      console.log(err);
      res.send({
        code: 403,
        message: "Error in updating room",
        error: err
      });
    });
});

router.post("/delete", function(req, res, next) {
  init.chatkit
    .getDeleteStatus({ jobId: req.body.roomId })
    .then(res => {
      console.log(`delete user status: ${res.status}`);
      res.send({
        code: 200,
        message: "Deleted user successfully",
        status: res
      });
    })
    .catch(err => {
      console.log(err);
      res.send({
        code: 403,
        message: "Error in deleting room",
        error: err
      });
    });
});

router.post("/getroom", function(req, res, next) {
  init.chatkit
    .getRoom({
      roomId: req.body.roomId
    })
    .then(res => {
      res.send({
        code: 200,
        message: "get room successfully",
        room: res
      });
    })
    .catch(err => {
      console.log(err);
      res.send({
        code: 403,
        message: "Error in getting room",
        error: err
      });
    });
});

router.get("/getrooms", function(req, res, next) {
  init.chatkit
    .getRooms({})
    .then(res => {
      res.send({
        code: 200,
        message: "get rooms successfully",
        room: res
      });
    })
    .catch(err => {
      console.log(err);
      res.send({
        code: 403,
        message: "Error in getting rooms",
        error: err
      });
    });
});

router.post("/addusers", function(req, res, next) {
  init.chatkit
    .addUsersToRoom({
      roomId: req.body.roomId,
      userIds: req.body.userIds
    })
    .then(() => {
      console.log("Added users to room successfully");
      res.send({
        code: 200,
        message: "Added users to room successfully"
      });
    })
    .catch(err => {
      console.log(err);
      res.send({
        code: 403,
        message: "Error in adding users",
        error: err
      });
    });
});

router.post("/removeusers", function(req, res, next) {
  init.chatkit
    .removeUsersFromRoom({
      roomId: req.body.roomId,
      userIds: req.body.userIds
    })
    .then(() => {
      console.log("Removed users from room successfully");
      res.send({
        code: 200,
        message: "Removed users from room successfully"
      });
    })
    .catch(err => {
      console.log(err);
      res.send({
        code: 403,
        message: "Error in removing users",
        error: err
      });
    });
});
