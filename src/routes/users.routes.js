const  { Router } = require("express");

const usersRoutes = Router()

usersRoutes.post("/users", (request, response) => {
  const {name, email, password} = request.body

  response.json(`usuário: ${name} email: ${email} senha: ${password}`)
})


module.exports = usersRoutes;