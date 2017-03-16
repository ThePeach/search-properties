const express = require('express')
const router = express.Router()

/* GET list of results by keyword */
router.get('/:keyword', function (req, res, next) {
  res.send('respond with the list of results')
})

module.exports = router
