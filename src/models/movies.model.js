const mongoose = require("mongoose");
const schema = mongoose.Schema;
const MoviesModel = new schema({
  title: String,
  year: Number,
  rated: String,
  released: Date,
  runtime: String,
  genre: String,
  director: String,
  writer: String,
  actors: String,
  plot: String
});

const Movies = mongoose.model("movies", MoviesModel);
module.exports = Movies;
