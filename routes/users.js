const express = require("express");
const router = express.Router();
const init = require("../init/initialize");

// const mongoDbUrl = "mongodb://localhost:27017/"; // local url
const mongoDbUrl =
  "mongodb+srv://jagruteebanda:jagz%40123@cluster0-imu9r.mongodb.net";

router.get("/temp", function(req, res, next) {
  console.log("/temp ===========================>");
  res.send({
    code: 200,
    message: "success"
  });
});

router.post("/auth", function(req, res, next) {
  console.log("/user/auth", req.body);
  const authData = init.chatkit.authenticate({
    userId: req.body.userId
  });
  switch (authData.status) {
    case 200:
      res.send({
        code: 200,
        message: "Valid user",
        accessToken: authData.body["access_token"],
        expiresIn: authData.body["expires_in"]
      });
      break;
    default:
      res.send({
        code: 204,
        message: "Not valid user"
      });
      break;
  }
});

router.post("/create", function(req, res, next) {
  console.log("In /apis/user/create =============>");
  init.chatkit
    .createUser({
      id: req.body.userId,
      name: req.body.userName
    })
    .then(user => {
      console.log("User created successfully", user);
      init.chatkit
        .createRoom({
          id: `${req.body.userId}_chat_room`,
          creatorId: req.body.userId,
          name: `${req.body.userId}_chat_room`
        })
        .then(room => {
          console.log("Room created successfully", room);
          init.chatkit
            .addUsersToRoom({
              roomId: room.id,
              userIds: [req.body.userId, "chatbot"]
            })
            .then(() => {
              console.log("Success while adding users to the room.");
              let messages = [];
              init.chatkit
                .sendSimpleMessage({
                  userId: "chatbot",
                  roomId: room.id,
                  text: `Hello ${user.name}`
                })
                .then(msgRes => {
                  console.log("Sent message with id:: ", msgRes);
                  init.chatkit
                    .sendSimpleMessage({
                      userId: "chatbot",
                      roomId: room.id,
                      text: `Looking to buy something?`
                    })
                    .then(msgRes => {
                      console.log("Sent message with id:: ", msgRes);
                    })
                    .catch(msgErr => {
                      console.log("Error in sending message :: ", msgErr);
                    });
                })
                .catch(msgErr => {
                  console.log("Error in sending message :: ", msgErr);
                });
              res.send({
                code: 200,
                message: "Created room for user",
                roomId: room.id,
                roomName: room.name,
                userId: user.id,
                userName: user.name
              });
            })
            .catch(err => {
              console.log("Error while adding users to the room :: ", err);
            });
          init.mongoClient.connect(mongoDbUrl, (dbErr, db) => {
            if (dbErr) {
              console.log("Error connecting to DB :: ", dbErr);
            } else {
              const dbo = db.db("chatbot");
              dbo
                .collection("users")
                .insertOne(user, function(userErr, userRes) {
                  if (userErr) {
                    console.log("Error while inserting user :: ", userErr);
                  } else {
                    console.log(
                      "Success while inserting user:: ",
                      userRes["ops"]
                    );
                  }
                });
              dbo
                .collection("rooms")
                .insertOne(room, function(roomErr, roomRes) {
                  if (roomErr) {
                    console.log("Error while inserting room :: ", roomErr);
                  } else {
                    console.log(
                      "Success while inserting room:: ",
                      roomRes["ops"]
                    );
                  }
                });
              db.close();
            }
          });
        })
        .catch(err => {
          console.log("Not able to create room:: ", err);
          res.send({
            code: 403,
            message: "Not able to create room",
            error: err
          });
        });
    })
    .catch(error => {
      console.log("Not able to create user:: ", error);
      res.send({
        code: 403,
        message: "Not able to create user",
        error
      });
    });
});

router.post("/update", function(req, res, next) {
  init.chatkit
    .createUser({
      id: "jagruteebanda",
      name: "Jagrutee Banda"
    })
    .then(response => {
      console.log(response, "======================>");
      res.send({
        code: 200,
        message: "User created successfully"
      });
    })
    .catch(error => {
      res.send({
        code: 403,
        message: "Not able to create user"
      });
    });
});

router.post("/getuserbyid", function(req, res, next) {
  init.chatkit
    .getUser({
      id: req.body.userId
    })
    .then(response => {
      console.log(response, "======================>");
      res.send({
        code: 200,
        message: "User get",
        user: response
      });
    })
    .catch(error => {
      res.send({
        code: 403,
        message: "Not able to get user"
      });
    });
});

router.post("/getusers", function(req, res, next) {
  init.chatkit
    .getUsers()
    .then(response => {
      console.log(response, "======================>");
      res.send({
        code: 200,
        message: "User get",
        users: response
      });
    })
    .catch(error => {
      res.send({
        code: 403,
        message: "Not able to get users"
      });
    });
});

router.post("/deleteuser", function(req, res, next) {
  init.chatkit
    .asyncDeleteUser({ userId: req.body.userId })
    .then(() => {
      res.send({
        code: 200,
        message: "User deleted successfully"
      });
    })
    .catch(err => {
      console.error(err);
      res.send({
        code: 403,
        message: "Not able to create user",
        error: err
      });
    });
});

module.exports = router;
