const express = require('express')
const router = express.Router()

/* GET list of results by postcode */
router.get('/:postcode', function (req, res, next) {
  res.send('respond with the list of results')
})

module.exports = router
