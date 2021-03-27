const express = require("express");
const moviesRoute = express.Router();
//CONTROLLER
const {getAllMovies,getMovie,addMovie,deleteAllMovies,deleteMovie,editMoive} = require("../controller/movies");

//ROUTES
moviesRoute.get("/getAllMovies",getAllMovies);
moviesRoute.get("/getMovie",getMovie);

moviesRoute.post("/addMovie",addMovie);

moviesRoute.post("/deleteAll",deleteAllMovies);
moviesRoute.post("/delete",deleteMovie);

moviesRoute.put("/edit",editMoive);

module.exports = moviesRoute;
