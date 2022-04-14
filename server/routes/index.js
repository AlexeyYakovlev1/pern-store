const router = require("express").Router();

router.use("/user", require("./user.routes"));
router.use("/type", require("./type.routes"));
router.use("/brand", require("./brand.routes"));
router.use("/device", require("./device.routes"));
router.use("/basket", require("./basket.routes"));

module.exports = router;