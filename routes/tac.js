var express = require('express');
var router = express.Router();

/* GET tac page. */
router.get('/', function(req, res, next) {
  res.render('tac', { title: 'Tac' });
});

module.exports = router;
