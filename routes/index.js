const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
const roomsRouter = require("./rooms");
const messageRouter = require("./messages");

router.use("/user", usersRouter);
router.use("/room", roomsRouter);

module.exports = router;
