import express from 'express'
import userController from '../controller/user.js'

let router = express.Router()
router.get('/',userController.getAllUsers)
router.get('/:id',userController.getUserById)


export default router;