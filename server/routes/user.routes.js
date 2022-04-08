const router = require("express").Router();
const UserController = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");

router.post("/registration", UserController.registration)
router.delete("/delete/:id", roleMiddleware("ADMIN"), UserController.delete)
router.post("/login", UserController.login)
router.get("/auth", authMiddleware, UserController.auth)

module.exports = router;