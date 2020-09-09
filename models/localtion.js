const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocaltionSchema = new Schema({

    zipCode: { type: Number , required: true,},

    name: { type: String, required: true, },

    officals: { type: Array, required: true, },

    propositions: { type: Array, required: true, },

});


const LocaltionModel = mongoose.model('Localtion', LocaltionSchema);

module.exports = LocaltionModel;
