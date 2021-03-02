var express = require('express');
var router = express.Router();


/* GET new message page. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'Mini-message Board', text: "MINI MESSAGE BOARD"});
});




module.exports = router;




