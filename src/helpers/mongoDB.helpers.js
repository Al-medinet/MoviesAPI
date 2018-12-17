const mongoose = require("mongoose");
// Database connection
mongoose.Promise = global.Promise;
export const connect = () => mongoose.connect("mongodb://localhost/movies_api");
