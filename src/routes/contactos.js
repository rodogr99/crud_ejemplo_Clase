const router = require('express').Router();

const controller = require('./../controllers/contactos');

router.get('/', controller.list);
router.post('/',controller.create);
router.get('/:id',controller.getItem);
router.put('/:id',controller.update);
router.delete('/:id',controller.deleteOne);

module.exports = router;