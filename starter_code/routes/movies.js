const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/movies', (req, res) => {
  res.render('movies');
});

module.exports = router;