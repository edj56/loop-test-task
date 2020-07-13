const router = require('express').Router();
const controller = require('../controllers/calculations');


router.get('/', controller.calculate);


module.exports = router;