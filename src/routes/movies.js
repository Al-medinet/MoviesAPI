const express = require("express");
const router = express.Router();
const MoviesController = require("../controllers/MoviesController");
router
  .route("/movies")
  .get(MoviesController.getAllMovies)
  .post(MoviesController.addMovie);

router.route("/gender").get(MoviesController.getAllGender);

module.exports = router;
