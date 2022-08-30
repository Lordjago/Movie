import User from "../models/User.js";
import CryptoJS from "crypto-js";


//UPDATE
export const updateUser = async(req, res, next) => {
    if(req.user._id === req.params.id || req.user.isAdmin){
        if(req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
              ).toString()
        }
        try {
                const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },{
                new: true
            })
        } catch (err) {
            const error = new Error(err);
            error.status = 500;
            next(error);
        }
            const { password, ...others } = user._doc;
            return res.status(200).json(others)
            }else{
                return res.status(403).json({
                    "message":"You can update only your account"
                })
            }
        
    
}

//DELETE
export const deleteUser = async(req, res, next) => {
    if(req.user._id === req.params.id || req.user.isAdmin){
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            return res.status(200).json("User has been deleted")
        } catch (err) {
            const error = new Error(err);
            error.status = 500;
            next(error);
        }
    
    }else{
        return res.status(403).json({
            "message":"You can delete only your account"
        })
    }
}

//GET 
export const getUser = async(req, res, next) => {
        try {
            const user = await User.findById(req.params.id)
            const {password, ...others} = user._doc
            return res.status(200).json(others)
        } catch (err) {
            const error = new Error(err);
            error.status = 500;
            next(error);
        }
}
//GET  ALL
export const getAll = async(req, res, next) => {
    const query = req.query.new
    if(req.user.isAdmin){
         try {
        const user = query ? await User.find().sort({createdAt: -1}).limit(10) : await User.find()
        return res.status(200).json(user)
        } catch (err) {
            const error = new Error(err);
            error.status = 500;
            next(error);
        }
    }else{
        return res.status(403).json("You are not allowed to view all users")
    }
   
}

//GET STATS 
export const stats = async(req, res, next) => {
    // const today = new Date()
    // const lastYear = today.setFullYear(today.setFullYear() - 1)

    // const monthsArray = [
    //     "January",
    //     "February",
    //     "March",
    //     "April",
    //     "May",
    //     "June",
    //     "July",
    //     "August",
    //     "September",
    //     "October",
    //     "November",
    //     "December",
    // ];
    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: {
                        $month: "$createdAt"
                    },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum : 1}
                }
            }
        ])
        return res.status(200).json(data)
    } catch (err) {
        const error = new Error(err)
        error.status = 500
        next(error)
    }
}
