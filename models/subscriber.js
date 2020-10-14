const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  userChannel: {
    type: String,
    required: true,
  },
  userDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Subscriber',subscriberSchema)
