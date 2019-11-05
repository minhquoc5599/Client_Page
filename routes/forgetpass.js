var express = require('express');
var router = express.Router();

/* GET forgetpass page. */
router.get('/', function(req, res, next) {
  res.render('forgetpass', { title: 'Forgetpass' });
});

module.exports = router;
