const router = require("express").Router();
const DeviceController = require("../controllers/device.controller");
const roleMiddleware = require("../middleware/role.middleware");

router.post("/create", roleMiddleware("ADMIN"), DeviceController.create);
router.delete("/delete/:id", roleMiddleware("ADMIN"), DeviceController.delete);
router.get("/", DeviceController.get);
router.get("/:id", DeviceController.getById);

module.exports = router;