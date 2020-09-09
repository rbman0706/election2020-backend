const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/:id", ctrl.cart.show);
router.post("/", ctrl.cart.create);
router.put("/:id", ctrl.cart.update);
router.delete("/:id/delete", ctrl.cart.destroy);


module.exports = router;