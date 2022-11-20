 const router = require('express').Router();
 const rutasContactos = require ('./contactos');

router.use('/contactos',rutasContactos);
 module.exports = router;