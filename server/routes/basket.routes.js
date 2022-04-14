const router = require("express").Router();
const BasketController = require("../controllers/basket.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/add", authMiddleware, BasketController.add);
router.delete("/remove", authMiddleware, BasketController.remove);
router.get("/", authMiddleware, BasketController.get);

module.exports = router;