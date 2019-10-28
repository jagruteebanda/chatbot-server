const express = require('express');
const router = express.Router();
const init = require('../init/initialize');

router.get('/temp', function (req, res, next) {
  console.log('/temp ===========================>');
  res.send({
    code: 200,
    message: 'success'
  });
});

router.post('/auth', function (req, res, next) {
  console.log('/user/auth', req.body);
  const authData = init.chatkit.authenticate({
    userId: req.body.userId
  });
  switch (authData.status) {
    case 200:
      res.send({
        code: 200,
        message: 'Valid user',
        accessToken: authData.body['access_token'],
        expiresIn: authData.body['expires_in'],
      });
      break;
    default:
      res.send({
        code: 204,
        message: 'Not valid user'
      })
      break;
  }
});

router.post('/create', function (req, res, next) {
  init.chatkit.createUser({
    id: req.body.userId,
    name: req.body.userName,
  }).then((response) => {
    console.log(response, '======================>');
    res.send({
      code: 200,
      message: 'User created successfully'
    });
  }).catch((error) => {
    res.send({
      code: 403,
      message: 'Not able to create user'
    })
  });
});

router.post('/update', function (req, res, next) {
  init.chatkit.createUser({
    id: 'jagruteebanda',
    name: 'Jagrutee Banda',
  }).then((response) => {
    console.log(response, '======================>');
    res.send({
      code: 200,
      message: 'User created successfully'
    });
  }).catch((error) => {
    res.send({
      code: 403,
      message: 'Not able to create user'
    })
  });
});

module.exports = router;
