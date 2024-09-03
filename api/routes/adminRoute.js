import express from 'express'
import { verifyToken} from '../utils/verifyAdmin.js'
import { adminLogin, adminHome ,addUser,adminLogout} from '../controllers/adminController.js'
const router = express.Router()

router.post('/login',adminLogin)
router.post('logout',adminLogout)
router.get('/home',verifyToken, adminHome)
router.post('/addUser',verifyToken, addUser)

export default router