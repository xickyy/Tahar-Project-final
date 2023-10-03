const router = require('express').Router();
const sessionRouter = require('../../app.js');
const { restoreUser } = require('../../utils/auth.js');

router.use('/business-profile', require('./google.js'));

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});


module.exports = router;
