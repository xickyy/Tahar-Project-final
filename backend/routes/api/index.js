const router = require('express').Router();

router.use('/businessProfile', require('./google.js'));

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});


module.exports = router;
