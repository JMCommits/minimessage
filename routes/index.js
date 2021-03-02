var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hey whats up gurllllll",
    user: "Samantha",
    added: new Date()
  },
  {
    text: "Not too much",
    user: "Jesse",
    added: new Date()
  }
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini-message Board', text: "MINI MESSAGE BOARD", messages: messages });
});

router.post('/', function(req, res) {
  let messageText = req.body.text
  let user = req.body.user
  let added = new Date()
  messages.push({text: messageText, user: user, added: added})
  res.redirect('/')
});


module.exports = router;
