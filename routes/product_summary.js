var express = require('express');
var router = express.Router();

/* GET product_sumary page. */
router.get('/', function(req, res, next) {
  res.render('product_summary', { title: 'Product_summary' });
});

module.exports = router;
