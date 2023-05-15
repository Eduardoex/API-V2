const  { Router } = require("express");

const MovieNotesController = require("../controllers/NotesController");


const movienotesRoutes = Router()


const  movienotesController = new MovieNotesController()

movienotesRoutes.get("/",  movienotesController.index)
movienotesRoutes.post("/:user_id",  movienotesController.create)
movienotesRoutes.get("/:id",  movienotesController.show)
movienotesRoutes.delete("/:id",  movienotesController.delete)


module.exports = movienotesRoutes;