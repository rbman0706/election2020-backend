const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Proposition = require('./proposition')
const Officals = require('./officials')

const LocationSchema = new Schema({

    zipCode: { type: Number , required: true,},

    name: { type: String, required: true, },

    presCandidates: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Officals'
    }],

    propositions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proposition'
      }],

});


const LocationModel = mongoose.model('Location', LocationSchema);

module.exports = LocationModel;
