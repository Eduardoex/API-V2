const knex = require("../database/knex")

class NotesController{
  async create(request, response){
    const {title, description, rating, movieTags} = request.body;
    const {user_id} = request.params;
    console.log(movieTags)
    const [note_id] = await knex("movieNotes").insert({
      title,
      description,
      rating,
      user_id
    });

    
    const movieTagsInsert = movieTags.map(name => {
      return{
        note_id,
        name,
        user_id
      }
    })

    await knex("movieTags").insert(movieTagsInsert)

    response.json()

  }
} 

module.exports = NotesController;