const express = require('express')
const router = express.Router()

/* POST search. */
router.post('/', function (req, res, next) {
  res.send('grab data and redirect to results page')
})

router.get('/', function (req, res, next) {
  res.send('respond with the search page')
})

module.exports = router
