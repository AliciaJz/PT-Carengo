const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const DishSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  description: {
    type: String,
    required: [true, 'description is required']
  },
  image: String,
  price: String
});

module.exports = mongoose.model('dish', DishSchema);
