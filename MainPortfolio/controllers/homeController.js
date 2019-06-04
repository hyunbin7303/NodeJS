const express = require('express');
var router = express.Router();
const path = require('path');
router.get('/', (req,res)=> {
  console.log("Calling Home get method called.")
});
router.get('/contact' , (req,res) => {
  res.sendFile(path.join(__dirname +'/../public/Contact.html'));
});
router.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname +'/../public/Portfolio.html'));
});
module.exports = router;
