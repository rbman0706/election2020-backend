const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropositionSchema = new Schema({

    name: { type: String, required: true,},

    details: { type: String, required: true, },

    url: { type: String, required: true, },

});


const PropositionModel = mongoose.model('Proposition', PropositionSchema);

module.exports = PropositionModel;
