var express = require('express');
var router = express.Router();

/* GET legal_notice page. */
router.get('/', function(req, res, next) {
  res.render('legal_notice', { title: 'Legal_notice' });
});

module.exports = router;
