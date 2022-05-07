// Global variables
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const fs = require("fs");
const path = require("path");

// Connects to the database
const apiRoutes = require("./routes/apiRoutes/apiRoute");
const htmlRoutes = require("./routes/htmlRoutes/htmlRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Adds the port
app.listen(PORT, () => {
  console.log(`API server now on port: ${PORT}!`);
});
