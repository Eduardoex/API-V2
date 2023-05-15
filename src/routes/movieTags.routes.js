const { Router } = require("express")

const movieTagsController = require("../controllers/TagsController");

const movietagsRoutes = Router();


const movietagsController = new movieTagsController();

 
movietagsRoutes.get('/:user_id', movietagsController.index)




module.exports = movietagsRoutes;