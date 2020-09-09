const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/", ctrl.officials.index);
router.get("/:id", ctrl.officials.show);


module.exports = router;