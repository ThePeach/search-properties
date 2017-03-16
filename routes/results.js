const express = require('express')
const router = express.Router()

/* GET list of results by keyword */
router.get('/:keyword', function (req, res, next) {
  const keyword = req.parmas.keyword

  res.render('results', {
    keyword: keyword
  })
})

module.exports = router
