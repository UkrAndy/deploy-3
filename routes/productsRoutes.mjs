import { Router } from 'express'
import productController from '../controllers/productsController.mjs'
import multer from 'multer'
const router = Router()

// Налаштовуємо місце збереження файлів та їх імена
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  },
})
const upload = multer({ storage })

router.get('/', productController.getAllProducts)
router.get('/create', productController.getCreateProductForm)
router.post(
  '/create',
  upload.single('prodImg'),
  productController.createProduct
)
router.get('/edit/:id', productController.getEditProductForm)
router.post('/edit/:id', productController.updateProduct)
router.get('/:id', productController.getProductById)
router.delete('/', productController.deleteProduct)

export default router
