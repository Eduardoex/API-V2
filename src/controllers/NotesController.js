const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class NotesController{
  async create(request, response){
    let {title, description, rating, movieTags} = request.body;
    const {user_id} = request.params;
    const [note_id] = await knex("movieNotes").insert({
      title,
      description,
      rating,
      user_id
    });
   
    
    rating = Number(rating)

    

    console.log(typeof(rating))

    if(rating <= 5 && rating >= 0){}
    else{
    throw new AppError("Seu rating deve ser entre 0 a 5")
   }
   
 
   rating = String(rating)


    
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
