// models/season.js
const mongoose = require('mongoose');

const seasonSchema = new mongoose.Schema({
  start: { type: Date, default: Date.now },
  seasonNumber: { type: Number, default: 1 },
  durationDays: { type: Number, default: 30 },
   lastEnd: { type: Date }
});

module.exports = mongoose.model('Season', seasonSchema);