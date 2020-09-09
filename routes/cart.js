const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/:id", ctrl.cartCtrl.show);
router.post("/", ctrl.cartCtrl.create);
router.put("/:id", ctrl.cartCtrl.update);
router.delete("/:id/delete", ctrl.cartCtrl.destroy);


module.exports = router;