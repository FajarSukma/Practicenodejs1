const express = require('express');


const router = express.Router();


router.get('/', (req, res) => {
  res.send('Ideas Route');
});

router.get('/add', (req, res) =>{
  res.send('Ideas Add');
});

router.post('/', (req, res) =>{
  res.send('POST - Ideas route');
});

module.exports = router;
