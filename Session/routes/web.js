import express from 'express'
const router = express.Router()
import { StudentController } from '../controllers/studentController.js'

router.get('/getsessioninfo', StudentController.get_session_info)
router.get('/deletesession', StudentController.delete_session)
router.get('/regeneratedsession', StudentController.reg_session)
router.get('/examplesession', StudentController.example_session)
router.get('/getdatasession', StudentController.get_session_data)

export default router