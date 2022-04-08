const router = require("express").Router();
const TypeController = require("../controllers/type.controller");
const roleMiddleware = require("../middleware/role.middleware");

router.post("/create", roleMiddleware("ADMIN"), TypeController.create);
router.delete("/delete/:id", roleMiddleware("ADMIN"), TypeController.delete);
router.get("/", TypeController.get)

module.exports = router;