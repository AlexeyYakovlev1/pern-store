const router = require("express").Router();

router.use("/user", require("./user.routes"));
router.use("/type", require("./type.routes"));
router.use("/brand", require("./brand.routes"));
router.use("/device", require("./device.routes"));

module.exports = router;