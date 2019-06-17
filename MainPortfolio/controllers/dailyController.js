const express = require('express');
var router = express.Router();
const path = require('path');
const mongoose = require('mongoose');
const Daily = mongoose.model('Daily'); // Article schema from mongo




router.get('/', (req, res) => {
    console.log("Calling Daily page");
  // res.sendFile(path.join(__dirname +'/../public/Life.html'));
    Daily.find((err, docs) => {
      if(err)
      {
        console.log("ERROR HAPPENING IN READING ");
      }
      else{
    //   res.json(docs);
      res.render("daily/list", {
        list:docs
      })
    }
  });
  

});
router.post('/daily_create', (req, res) => {
  console.log("Daily Life Create. ");
  insertRecord(req,res);
})


function insertRecord(req, res){
  var daily = new Daily();
  daily.title = req.body.title;
  daily.content = req.body.content;
  daily.date = req.body.date;
  daily.save((err, doc) => {
   if(err) {
     console.log("ERROR HAPPEN");
     res.sendStatus(500);
     return
   }
   else{
     res.redirect('/home/life');
     res.end();
   }




   /* if(!err){

      res.redirect('daily');
    }else{
      if(err.name == 'ValidationError'){
        res.redirect('/home/life');
        res.end();
      } 
      else{
        console.log('ERROR during record insertion : ' + err);
      }
    }*/
  });
}

router.get('/list' , (req,res) => {
  console.log("Get method for music")
  Music.find((err, docs) => {
    if(!err){
      res.render("daily/list", {
        list: docs
      })
    }else{
      console.log('ERROR in retrieving music list : ' + err);
    }
  });
});

router.get('/delete/:id', (req,res) =>{
  Daily.findByIdAndRemove(req.params .id, (err, doc)=>{
    if(!err){
      console.log("REDIRECTING...");
      res.redirect('/');
    }
    else{
      console.log("Error for deleting :" + err);
    }
  });
})

function handleValidationError(err,body){
  for(field in err.errors)
  {
      switch (err.errors[field].path) {
        case 'dailtTitle':
          body['dailyTitleError'] = err.errors[field].message;
          break;
        case 'composer':
          body['composerError'] = err.errors[field].message;
          break;
        default:
          break;
      }
  }
}
module.exports = router;
