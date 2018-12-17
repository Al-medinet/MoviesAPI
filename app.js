const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const app = express();

// Database import
import { connect } from "./src/helpers/mongoDB.helpers";

// Export custom modules
const moviesRouter = require("./src/routes/movies");

// Middleware
app.use(bodyParser.json());
app.use(logger("dev"));

// Routes
app.use("/api", moviesRouter);

// Catch wrong URL and send 404 message to handler
app.use((req, res, next) => {
  const err = new Error(`${req.url} Not Found !`);
  err.status = 404;
  next(err);
});
// Error handler function
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;

  res.status(status).json({
    error: {
      message: error.message
    }
  });
  console.error(err);
});
// Starting Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server run on port : ${PORT}`));
