const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const rutas = require('./rutas/endpoints')



// settings
const app = express();
const port = 3000;

// middlewares
app.use(express.json());
app.use("/api", rutas);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});


// mongodb connection
   mongoose
  .connect('mongodb://localhost:27017/escuela_musica')
  .then(() => console.log("Connected to MongoDB Local"))
  .catch((error) => console.error(error));
 

// server listening
app.listen(port, () => console.log("Server listening to", port));

