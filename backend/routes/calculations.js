const router = require('express').Router();
const controller = require('../controllers/calculations');


router.post('/', controller.calculate);


module.exports = router;