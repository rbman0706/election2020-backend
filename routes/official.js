const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/", ctrl.officials.index);
router.get("/:id", ctrl.officialsCtrl.show);


module.exports = router;