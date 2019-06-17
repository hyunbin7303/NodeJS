const express = require('express');
var router = express.Router();
const path = require('path');
router.get('/', (req,res)=> {
  console.log("Calling Home get method called.")
});
router.get('/contact' , (req,res) => {
  res.sendFile(path.join(__dirname +'/../public/Contact.html'));
});
router.get('/Study' , (req,res) => {
  res.sendFile(path.join(__dirname +'/../public/Study.html'));
});
router.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname +'/../public/Portfolio.html'));
});
router.get('/MyPersonal', (req, res) => {
  res.sendFile(path.join(__dirname +'/../public/MyPersonal.html'));
});
router.get('/Others', (req, res) => {
  res.sendFile(path.join(__dirname +'/../public/Others.html'));
});
router.get('/Life', (req, res) => {
  res.sendFile(path.join(__dirname +'/../public/Life.html'));
});
router.get('/NodeJSmain', (req, res) => {
  res.sendFile(path.join(__dirname +'/../public/NodeJSmain.html'));
});
module.exports = router;
