var express = require('express');
var router = express.Router();

/* GET special_offer page. */
router.get('/', function(req, res, next) {
  res.render('special_offer', { title: 'special_offer' });
});

module.exports = router;
