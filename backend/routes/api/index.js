const router = require('express').Router();

router.use('/business-profile', require('./google.js'));

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});


module.exports = router;
