const express = require('express')
const router = express.Router()

// GET search page
router.get('/', function (req, res, next) {
  res.render('search')
})

/* POST search. */
router.post('/', function (req, res, next) {
  // if no results for the current search term
  // then display "no results" page
  // otherwise...
  const keyword = 'N11'
  res.redirect(`../results/${keyword}`)
})

module.exports = router
