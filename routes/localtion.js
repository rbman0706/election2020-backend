const router = require('express').Router();
const ctrl = require('../controllers');

// routes

router.get('/:id', ctrl.localtions.show)


// exports
module.exports = router;