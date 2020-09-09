const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OfficialsSchema = new Schema({

    name: { type: String, required: true,},

    photo: { type: String, required: true,  default: 'photo'},

    website: { type: String, required: true, },

    party: { type: String, required: true, },


});


const OfficialsModel = mongoose.model('Officials', OfficialsSchema);

module.exports = OfficialsModel;
