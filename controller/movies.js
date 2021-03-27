
const Movie = require("../model/movie");

//GET ROUTES
exports.getAllMovies = (req, res, next) => {
  
    Movie.find({},(err,movies)=>{
        if(err) throw err;
        res.json(movies);
    })
    
}

exports.getMovie = (req, res, next) => {

}


//ADD ROUTE / POST
exports.addMovie = async(req, res, next) => {

    //CHECK THE MOVIE IF IT IS EXISTS
    const { title, description, image,imbd,trailer,releaseDate } = req.body;

    Movie.find({title:title},async(err,result)=>{
        if(result.length){
            res.json({message:`${title} is already exists`,success:false})
        } else{
            try {
                const newMovie = await new Movie({
                    title,
                    description,
                    image,
                    imbd,
                    trailer,
                    releaseDate
                });
            
                const movie = await newMovie.save()
                res.json({ message: `${movie.title} has added to db` })
                
            } catch (err) {
                console.log(err);
                res.json({ error: err });
            }
        }
    })
    
}


//DELETE ROUTES
exports.deleteAllMovies = (req, res, nexy) => {

}

exports.deleteMovie = (req, res, next) => {

}


//EDIT ROUTE
exports.editMoive = (req, res, nexy) => {

}