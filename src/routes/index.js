const { Router } = require("express");

const usersRouter = require("./users.routes")
const movienotesRouter = require("./movieNotes.routes")
const movietagsRouter = require("./movieTags.routes")

const routes = Router ()
routes.use("/users", usersRouter )
routes.use("/movienotes", movienotesRouter )
routes.use("/movietags", movietagsRouter)

module.exports = routes