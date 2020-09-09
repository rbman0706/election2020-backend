
const db = require("../models");


const show = (req, res) => {
  db.Cart.findById(req.params.id, (err, foundCart) => {
    if (err) console.log("Error in cart#show:", err);

    res.status(200).json(foundCart);
  });
};

const create = (req, res) => {
  db.Cart.create(req.body, (err, savedCart) => {
    if (err) console.log('Error in Cart#create:', err);

    res.status(200).json(savedCart);
  });
};

const update = (req, res) => {
  db.Cart.findByIdAndUpdate(req.params.j_id, req.body, { new: true }, (err, updatedCart) => {
    if (err) console.log('Error in Carts#update:', err);

    if (!updatedCart) {
      res.status(400).json({ message: `Could not find cart with id ${req.params.id}` });
    }

    res.json(updatedCart);
  });
};

const destroy = (req, res) => {
  db.Cart.findByIdAndDelete(req.params.id, (err, deletedCart) => {
    if (err) console.log('Error in Carts#destroy:', err);

    res.status(200).json(deletedCart);
  });
};


module.exports = {
  show,
  create,
  update,
  destroy,
};
