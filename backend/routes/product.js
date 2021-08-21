import express from 'express';
import { list, create, productById, read, remove, update ,photo} from '../controllers/product';
const router = express.Router();

router.post('/products', create);
router.get('/products', list);
router.put('/products/:productId', update)
router.get('/products/photo/:productId', photo)

router.get('/products/:productId', read);
router.delete('/products/:productId', remove);
router.param('productId', productById);  
module.exports = router;