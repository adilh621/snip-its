const router = require("express").Router();
const snipitRoutes = require("./snipits");
const userRoutes = require("./user");

// comments routes
router.use("/comments", snipitRoutes);
// user routes
router.use("/user", userRoutes);

module.exports = router;
