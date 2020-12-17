var express = require('express');
var router = express.Router();
const heroesController = require('../controllers/heroesController');

router.get('/', heroesController.heroes);
router.get('/detalles/:id', heroesController.heroesDetalles);
router.get('/bio/:id/:ok?', heroesController.heroesBio);


module.exports = router;