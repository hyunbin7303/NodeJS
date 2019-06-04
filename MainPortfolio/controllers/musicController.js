const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Music = mongoose.model('Music'); // Music schema from mongo



router.get('/', (req,res)=> {
  console.log("Calling Music get method called.")
  res.render("music/addOrEdit", {
    viewTitle: "Insert Music"
  });
});



router.post('/', (req,res)=> {
  console.log(req.body);
  if(req.body._id == '')
    insertRecord(req,res);
    else
    updateRecord(req,res);
})

function insertRecord(req, res){
  var music = new Music();
  music.musicTitle = req.body.musicTitle;
  music.composer = req.body.composer;
  music.date = req.body.date;
  music.save((err, doc) => {
    if(!err){
      res.redirect('music/list');
    }else{
      if(err.name == 'ValidationError'){
        handleValidationError(err, req.body);
        res.render("music/addOrEdit", {
          viewTitle: "Insert music",
          music: req.body
        })
      }
      else{
        console.log('ERROR during record insertion : ' + err);
      }
    }
  });
}
function updateRecord(req, res){
  Music.findOneAndUpdate({_id: req.body._id}, req.body, {new : true}, (err, doc)=> {
    if(!err){
      res.redirect('music/list');
    }
    else{
      if(err.name == 'ValidationError'){
        handleValidationError(err, req.body);
        res.render("music/addOrEdit",{
          viewTitle: "Update MUSIC",
          music: req.body
        });
      }
      else{
        console.log("Error happen for Updating :" + err);
      }
    }
  });

}


router.get('/list' , (req,res) => {
  console.log("Get method for music")
  Music.find((err, docs) => {
    if(!err){
      res.render("music/list", {
        list: docs
      })

    }else{
      console.log('ERROR in retrieving music list : ' + err);
    }
  });
});
function handleValidationError(err,body){
  for(field in err.errors)
  {
      switch (err.errors[field].path) {
        case 'musicTitle':
          body['musicTitleError'] = err.errors[field].message;
          break;
        case 'composer':
          body['composerError'] = err.errors[field].message;
          break;
        default:
          break;
      }
  }
}

router.get('/:id', (req,res)=>{
  Music.findById(req.params.id,( err, doc)=>{
    if(!err){
      res.render("music/addOrEdit", {
        viewTitle: "Update Music",
        emplo: doc
      });
    }
  });
});

module.exports = router;
