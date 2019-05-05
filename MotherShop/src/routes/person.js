let express = require('express');
let router = express.Router();


router.get('/person', (req,res) => {
  if(req.query.name){
    res.send(`you have requests a person ${req.query.name}`);
  }
  res.send('You have requested a person ');
});


router.get('/person/:name', function(req,res){
  console.log(req.params.name);
  res.send(`you have requested a person ${req.params.name}`);
});

router.get('/error', (req,res) => {
  throw new Error('This is a forced error.');
})



module.exports = router;
