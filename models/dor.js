const mongoose = require('mongoose');

const dorSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  count: { type: Number, default: 0 }
});

module.exports = mongoose.model('dor', dorSchema);