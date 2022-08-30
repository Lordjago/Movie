import { Router } from "express";
import { deleteUser, getAll, getUser, stats, updateUser } from "../controller/users.js";
import verifyToken from "../middleware/verifyToken.js";

const router = Router()

//UPDATE
router.put('/:id', verifyToken, updateUser)
//DELETE4
router.delete('/:id', verifyToken, deleteUser)
//GET
router.get('/find/:id', getUser)
//GET ALL 
router.get('/', verifyToken, getAll)
//STAT
router.get('/stats', stats)

export default router