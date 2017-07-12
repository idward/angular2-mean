const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');


const db = "mongodb://localhost:27017/videoplayer";
mongoose.Promise = global.Promise;
mongoose.connect(db, (err)=> {
  if (err) {
    console.error('Error! ' + err);
  } else {
    console.log('database connect successfully!');
  }
});

router.get('/videos', (req, res)=> {
  console.log('Get request for all videos');
  Video.find({}).exec((err,videos) => {
    if(err){
      console.log('Error retrieving videos');
    } else {
      res.json(videos);
    }
  });
});

router.get('/videos/:id', (req, res)=> {
  console.log('Get request for single video');
  Video.findById(req.params.id).exec((err,video) => {
    if(err){
      console.log('Error retrieving video');
    } else {
      res.json(video);
    }
  });
});

module.exports = router;
