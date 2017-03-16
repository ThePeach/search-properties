const express = require('express')
const listing = require('../utils/listing')

const router = express.Router()

// GET search page
router.get('/', function (req, res, next) {
  res.render('search')
})

/* POST search. */
router.post('/', function (req, res, next) {
  const keyword = req.body.keyword

  listing.search(keyword)
    .then((result) => {
      // otherwise redirect to results page
      res.redirect(`../results/${keyword}`)
    })
    .catch((error) => {
      // if no results for the current search term
      // then display "no results" page
      if (typeof error.result_count !== 'undefined' && error.result_count === 0) {
        res.render('search', {
          no_results: true
        })
      } else {
        console.error(error)
      }
    })
})

module.exports = router
