var express = require('express');
var router = express.Router();

/* GET product page. */
router.get('/', function(req, res, next) {
  res.render('edit_profie', { title: 'Edit_profie' });
});

module.exports = router;
