var express = require('express');
var router = express.Router();

/* GET faq page. */
router.get('/', function(req, res, next) {
  res.render('faq', { title: 'Faq' });
});

module.exports = router;
