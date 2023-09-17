import express from "express";
const router = express.Router();

import { studentController } from "../controllers/studentController.js";

router.get('/', studentController.getAllDoc);
router.post('/', studentController.createDoc);
router.get('/edit/:id', studentController.editDoc);
router.post('/update/:id', studentController.updateDocById);
router.post('/delete/:id', studentController.deleteDocById);

export default router

