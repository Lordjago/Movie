import List from "../models/List.js";

//CREATE
export const create = async(req, res, next) => {
    if(req.user.isAdmin){
        const newList = new List(req.body)
        try {
            await newList.save()
            return res.status(201).json(newList)
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
export const deleteList = async(req, res, next) => {
    if(req.user.isAdmin){
        try {
            await List.findByIdAndDelete(req.params.id)
            return res.status(201).json("List has been deleted")
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
export const getAll = async(req, res, next) => {
    const typeQuery = req.query.type
    const typeGenre = req.query.genre

    let list = []

    try {
        if(typeQuery){
            if(typeGenre){
                list = await List.aggregate([
                    {$sample: {size: 10}},
                    {$match: {type: typeQuery, genre: typeGenre}}
                ]);
                // list = await List.find({$and: [{type: typeQuery}, {type: typeGenre}]}).limit(10)
            }else{
                list = await List.aggregate([
                    {$sample: {size: 10}},
                    {$match: {type: typeQuery }}
                ]);
                // list = await List.find({type: typeQuery}).limit(10)
            }

        }else{
            list = await List.aggregate([{$sample : {size: 10}}])
            // list = await List.find().limit(10)
        }
        return res.status(200).json(list)
    } catch (err) {
        const error = new Error(err);
        error.status = 500; 
        next(error);
    }
}