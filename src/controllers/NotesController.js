//  movieNotesController esta dando um problema na rota então deixei notesController 

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

    
    if(Number.isInteger(rating)){}
    else{
      throw new AppError("Seu numero deve ser inteiro")
    }
    

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

  async show(request, response ){
    const {id} = request.params

    const movieNotes = await knex("movieNotes").where({id}).first()
    const movieTags = await knex("movieTags").where({note_id: id }).orderBy("name")


    return response.json({...movieNotes,
      movieTags})
  }

  async delete(request, response){
    const{id} = request.params

    await knex ("notes").where({id}).delete();

    return response.json
  }

  

  async index(request, response){
    const { user_id, title, movieTags} = request.query

    let movieNotes

    if(movieTags){

      const filterMovieTags = movieTags.split(",").map(movieTag => movieTag.trim())
      
      movieNotes = await knex("movieTags")
      .select([
        "movieNotes.id",
        "movieNotes.title",
        "movieNotes.user_id"
      ])
      .where("movieNotes.user_id", user_id)
      .whereLike("movieNotes.title", `%${title}%`)
      .whereIn("name", filterMovieTags)
      .innerJoin("movieNotes", "movieNotes.id", "movieTags.note_id")
      .orderBy("movieNotes.title")


    }else{

     movieNotes = await knex("movieNotes")
    .where({user_id })
    .whereLike("title", `%${title}%`)
    .orderBy("title")
    }
    

    const userTags = await knex("movieTags").where({user_id})
    const NotesWithTags = movieNotes.map(movieNote => {
      const noteTags = userTags.filter(movieTag => movieTag.movieNote_noteid === movieNotes.id)

      return {
        ...movieNote,
        movieTags: noteTags
      }
    })

    return response.json(NotesWithTags)




  }
} 



module.exports = NotesController;
