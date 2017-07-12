const mongoose = require('mongoose');

const Schama = mongoose.Schema;

const videoSchema = new Schama({
  title: String,
  url: String,
  description: String
});

module.exports = mongoose.model('video',videoSchema,'videos');
