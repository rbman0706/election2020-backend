const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    proposition: { type: mongoose.Schema.Types.ObjectId, ref: "Proposition" },
    details: String,
    forOrAgains: Boolean,
    // officials: [{ type: mongoose.Schema.Types.ObjectId, ref: "Official" }],
    // location: { type: mongoose.Schema.Types.ObjectId, ref: "Location" },
  },
);

const CartModel = mongoose.model('Cart', CartSchema);

module.exports = CartModel;
