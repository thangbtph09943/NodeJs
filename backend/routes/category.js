import express from "express";
const router = express.Router();
import { create, list, categoryById, read, update, remove} from "../controllers/category";
router.post('/category', create);
router.get('/categories', list);
router.get('/category/:categoryId', read);
router.put('/category/:categoryId', update);
router.delete('/category/:categoryId', remove);
router.param('categoryId', categoryById);

module.exports = router;