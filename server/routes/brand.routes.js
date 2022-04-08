const router = require("express").Router();
const BrandController = require("../controllers/brand.controller");
const roleMiddleware = require("../middleware/role.middleware");

router.post("/create", roleMiddleware("ADMIN"), BrandController.create);
router.delete("/delete", roleMiddleware("ADMIN"), BrandController.delete);
router.get("/", BrandController.get)

module.exports = router;