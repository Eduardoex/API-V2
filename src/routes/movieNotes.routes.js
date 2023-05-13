const  { Router } = require("express");

const MovieNotesController = require("../controllers/NotesController");


const movienotesRoutes = Router()


const  movienotesController = new MovieNotesController()

movienotesRoutes.post("/:user_id",  movienotesController.create)



module.exports = movienotesRoutes;