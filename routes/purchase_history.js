var express = require('express');
var router = express.Router();

/* GET product page. */
router.get('/', function(req, res, next) {
  res.render('purchase_history', { title: 'Purchase-history' });
});

module.exports = router;
