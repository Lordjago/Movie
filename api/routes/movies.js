import {Router} from 'express';
import { create, deleteMovie, getAll, getMovie, getRandomMovie, update } from '../controller/movies.js';
import verifyToken from '../middleware/verifyToken.js';
const router = Router()


//CREATE
router.post('/', verifyToken, create)
//UPDATE
router.put('/:id', verifyToken, update)
//DELETE 
router.delete('/:id', verifyToken, deleteMovie)
//GET
router.get('/find/:id', verifyToken, getMovie)
//GET RANDOM
router.get('/random', verifyToken, getRandomMovie)
//GET ALL
router.get('/', verifyToken, getAll)

export default router