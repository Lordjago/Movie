import Movie from "../models/Movie.js";

//CREATE
export const create = async(req, res, next) => {
    if(req.user.isAdmin){
        const newMovie = new Movie(req.body)
        try {
            await newMovie.save()
            return res.status(201).json(newMovie)
        } catch (err) {
            const error = new Error(err);
            error.status = 500; 
            next(error);
        }
    }else{
        return res.status(403).json({
            "message":"You are not allowed"
       })
    }   
}
//UPDATE
export const update = async(req, res, next) => {
    if(req.user.isAdmin){
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },{
                new: true
            })
            return res.status(201).json(updatedMovie)
        } catch (err) {
            const error = new Error(err);
            error.status = 500;
            next(error);
        }
    }else{
        return res.status(403).json({
            "message":"You are not allowed"
       })
    }   
}

//DELETE
export const deleteMovie = async(req, res, next) => {
    if(req.user.isAdmin){
        try {
            await Movie.findByIdAndDelete(req.params.id)
            return res.status(200).json("Movie has been Deleted")
        } catch (err) {
            const error = new Error(err);
            error.status = 500;
            next(error);
        }
    }else{
        return res.status(403).json({
            "message":"You are not allowed"
       })
    }   
}

//GET
export const getMovie = async(req, res, next) => {
        try {
            const movie = await Movie.findById(req.params.id)
            return res.status(200).json(movie)
        } catch (err) {
            const error = new Error(err);
            error.status = 500;
            next(error);
        }
}

//GET RANDOM
export const getRandomMovie = async(req, res, next) => {
    const type = req.query.type
    let movie;
    try {
        if(type === "series"){
            movie = await Movie.aggregate([
                {
                   $match: {isSeries: true} 
                },
                {
                    $sample: {size: 1}
                }
            ])
            // movie = await Movie.find({isSeries: true}).sort(() => {return 0.5 - Math.random()}).limit(1)
        }else{
            movie = await Movie.aggregate([
                {
                   $match: {isSeries: false} 
                },
                {
                    $sample: {size: 1}
                }
            ])
            // movie = await Movie.find({isSeries: false}).sort(() => {return 0.5 - Math.random()}).limit(1)
        }
        return res.status(200).json(movie)
    } catch (err) {
        const error = new Error(err);
        error.status = 500;
        next(error);
    }
}

//GET ALL
export const getAll = async(req, res, next) => {
    if(req.user.isAdmin){
        try {
            const movies = await Movie.find().sort({createdAt: -1})
            return res.status(200).json(movies)
        } catch (err) {
            const error = new Error(err);
            error.status = 500;
            next(error);
        }
    }else{
        return res.status(403).json("You are not allowed")
    }
}