const express = require('express');
const router = express.Router();
const { auth } = require('../../middleware/auth');
const controller = require('./controller')
const upload = require('../../middleware/multer');
const validateGoods = require('../../middleware/validateGoods');
const multer = require('multer');

router.post('/', auth, validateGoods, controller.create);

router.get('/', auth, controller.getAll);
router.get('/:id', auth, controller.getById);
router.delete('/:id', auth, controller.deleteGoods);
router.put('/:id', auth, controller.update);
router.put('/image/:id', auth, controller.updateImage);


module.exports = router;
