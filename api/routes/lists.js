import {Router} from 'express';
import verifyToken from '../middleware/verifyToken.js';
import {create, deleteList, getAll} from '../controller/lists.js'
const router = Router()


//CREATE
router.post('/', verifyToken, create)
//DELETE 
router.delete('/:id', verifyToken, deleteList)
//GET ALL
router.get('/', verifyToken, getAll)

export default router