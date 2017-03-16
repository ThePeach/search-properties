const express = require('express')
const listing = require('../utils/listing')

const router = express.Router()

router.get('/', function (req, res, next) {
  res.redirect('/search')
})

/* GET list of results by keyword */
router.get('/:keyword', function (req, res, next) {
  const keyword = req.params.keyword

  listing.search(keyword)
    .then(listings => {
      res.render('results', {
        title: `Results for ${keyword}`,
        keyword: keyword,
        results: {
          count: listings.result_count
        },
        listings: listings.listing
      })
    })
})

module.exports = router
