const router = require("express").Router();
const snipitsRoutes = require("./snipits");
const userRoutes = require("./user");

// comments routes
router.use("/snipits", snipitsRoutes);
// user routes
router.use("/user", userRoutes);

module.exports = router;
