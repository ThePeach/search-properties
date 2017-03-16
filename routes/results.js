const express = require('express')
const listing = require('../utils/listing')

const router = express.Router()

/* GET list of results by keyword */
router.get('/:keyword', function (req, res, next) {
  const keyword = req.params.keyword

  listing.search(keyword)
    .then(listings => {
      res.render('results', {
        keyword: keyword,
        results: {
          count: listings.result_count
        },
        listings: listings.listing
      })
    })
})

module.exports = router
