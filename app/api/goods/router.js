const express = require('express');
const router = express.Router();
const { auth } = require('../../middleware/auth');
const controller = require('./controller')
const upload = require('../../middleware/multer');
const validateGoods = require('../../middleware/validateGoods');
const multer = require('multer');

router.post('/goods', auth, validateGoods, controller.create);

router.get('/goods', auth, controller.getAll);
router.get('/goods/:id', auth, controller.getById);
router.delete('/goods/:id', auth, controller.deleteGoods);
router.put('/goods/:id', auth, controller.update);
router.put('/goods/image/:id', auth, controller.updateImage);


module.exports = router;
