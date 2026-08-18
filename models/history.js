const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  seasonNumber: Number,
  winners: [
    {
      userId: String,
      fama: Number,
      position: Number
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('History', historySchema);