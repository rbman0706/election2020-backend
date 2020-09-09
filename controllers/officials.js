const db = require("../models");

const index = (req, res) => {
  db.Official.find({}, (err, foundOfficials) => {
    if (err) console.log("Error in official#index:", err);

    res.status(200).json(foundOfficial);
  });
};

const show = (req, res) => {
  db.Official.findById(req.params.id, (err, foundOfficial) => {
    if (err) console.log("Error in official#show:", err);

    res.status(200).json(foundOfficial);
  });
};

module.exports = {
  index,
  show,
};