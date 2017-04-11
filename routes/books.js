const express = require('express');
const router = express.Router();

  router.get('/names', function(req, res) {
    res.send('book1, book2, book3')
  });

  router.get('/pages', function(req, res) {
    res.send('256, 357, 200')
  });

  module.exports = router
