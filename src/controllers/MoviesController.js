const Movies = require("../models/movies.model");

module.exports = {
  getAllMovies: (req, res, next) => {
    Movies.find({})
      .then(movies => res.status(200).json(movies))
      .catch(errors => next(errors));
  },
  addMovie: async (req, res, next) => {
    let newMovie = new Movies(req.body);
    try {
      const movie = await newMovie.save();
      res.status(201).json(movie);
    } catch (error) {
      next(error);
    }
  },
  getAllGender: (req, res) => {
    let gender = [
      {
        id: 1,
        description: "Action"
      },
      {
        id: 2,
        description: "Comedie"
      }
    ];
    res.status(200).json(gender);
  }
};
