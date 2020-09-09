const db = require('../models')


const show = (req, res) => {
    db.Localtion.findById(req.params.id, (err, foundLocaltion) => {
        if (err) console.log('Error in Localtion#show:', err);

        if (!foundLocaltion) return res.json({
            message: 'Localtion with provided ID not found.'
        })
        
        res.status(200).json({ Localtion: foundLocaltion })
    });
};



module.exports = {
    show,
}