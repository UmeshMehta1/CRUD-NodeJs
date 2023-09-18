import express from "express";
const router = express.Router();

import { todoController } from "../controllers/todoController.js";

router.get('/', todoController.getAllDoc);
router.post('/', todoController.createDoc);
router.get('/edit/:id', todoController.editDoc);
router.post('/update/:id', todoController.updateDocById);
router.post('/delete/:id', todoController.deleteDocById);

export default router
