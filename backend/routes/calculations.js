const router = require('express').Router();



router.get('/', (_, res) => res.json({ success: true, message: 'Message' }));


module.exports = router;