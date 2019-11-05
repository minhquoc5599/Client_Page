var express = require('express');
var router = express.Router();

/* GET product_details page. */
router.get('/', function(req, res, next) {
  res.render('product_details', { title: 'Product_details' });
});

module.exports = router;
