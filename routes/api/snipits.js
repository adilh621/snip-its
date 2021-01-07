const router = require("express").Router();
const snipitsController = require("../../controllers/snipitsController");

// Matches with "/api/comments"
router.route("/")
  .get(snipitsController.findAll)
  .post(snipitsController.create);

// Matches with "/api/comments/:id"
router
  .route("/:id")
  .get(snipitsController.findById)
  .put(snipitsController.update)
  .delete(snipitsController.remove);

module.exports = router;
