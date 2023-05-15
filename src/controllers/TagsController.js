const knex = require("../database/knex")

class TagsController{
  async index(request, response){
   
    const {user_id} = request.params;

    const movieTags = await knex("movieTags")
    .where({user_id})

    return response.json(movieTags)
  }
}

module.exports = TagsController