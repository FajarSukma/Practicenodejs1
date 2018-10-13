const express = require('express');


const router  = express.Router();


router.get('/login', (req, res) => {
  res.send('Login Page');
});

router.get('/register', (req, res) =>{
  res.send('Register Page');
});

router.post('/login', (req, res, next) =>{
  res.send('POST - LOGIN Page');
});

router.post('/register', (req, res) => {
  res.send('POST - REGISTER Page');
});


router.get('/logout', (req, res) =>{
  res.send('Logout Page');
});

module.exports = router;
