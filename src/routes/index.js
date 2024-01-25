import express from 'express'
import indexController from '../controller/index.js'
import userRoutes from './user.js'
let router = express.Router()

router.get('/',indexController.homePage)

//other routes
router.use('/user',userRoutes)

export default router