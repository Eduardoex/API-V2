const { Router } = require("express");

const usersRoutes = require("./users.routes")
const movienotesRoutes = require("./movieNotes.routes")

const routes = Router ()
routes.use("/users", usersRoutes )
routes.use("/movienotes", movienotesRoutes )

module.exports = routes