const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Proposition = require('./proposition')

const LocaltionSchema = new Schema({

    zipCode: { type: Number , required: true,},

    name: { type: String, required: true, },

    officals: [],

    propositions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proposition'
      }],

});


const LocaltionModel = mongoose.model('Localtion', LocaltionSchema);

module.exports = LocaltionModel;
