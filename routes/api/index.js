const router = require("express").Router();
const snipitsRoutes = require("./snipits");
const userRoutes = require("./user");
const uploadRoutes = require("./upload")

// comments routes
router.use("/snipits", snipitsRoutes);
// user routes
router.use("/user", userRoutes);

router.use("/upload", uploadRoutes)


module.exports = router;
