const router = require('express').Router();

router.use('/', (req, res) => {
    res.send('OK');
});

module.exports = router;