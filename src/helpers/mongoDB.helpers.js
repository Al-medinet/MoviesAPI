const mongoose = require("mongoose");
// Database connection
mongoose.Promise = global.Promise;
const connect = () => mongoose.connect("mongodb://localhost/movies_api");
mongoose.connection.on("connected", () => console.log("connected to db"));
mongoose.connection.once("disconnected", () =>
  console.log("Database disconnected")
);
mongoose.connection.on("error", error => console.log(error));
module.exports = connect();
