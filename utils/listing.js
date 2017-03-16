const fs = require('fs')
const path = require('path')

module.exports = (function () {
  function Result () {
    this.result_count = 0
  }

  /**
   * Normalises the query string so it can be used without problems
   *
   * @param {String} keyword
   * @returns {String}
   */
  function _normalise (keyword) {
    return keyword.toUpperCase()
  }

  /**
   * returns the full search string to be used to load the results
   *
   * @param {String} keyword
   * @returns {String}
   */
  function _getSearchString (keyword) {
    return path.join(__dirname, `../data/${keyword}.json`)
  }

  /**
   * checks if there are any results
   *
   * @param {String} keyword
   * @returns {Promise}
   */
  function count (keyword) {
    keyword = _normalise(keyword)

    return new Promise((resolve, reject) => {
      const filePath = _getSearchString(keyword)

      fs.access(filePath, fs.constants.F_OK, (err, fd) => {
        let res = new Result()
        if (err) {
          reject(res)
        } else {
          res.result_count = 1
          resolve(res)
        }
      })
    })
  }

  /**
   * Tis but a wrapper for any other search, currently using file system search
   *
   * @param {String} keyword
   */
  function search (keyword) {
    keyword = _normalise(keyword)

    return new Promise((resolve, reject) => {
      const filePath = _getSearchString(keyword)

      fs.readFile(filePath, 'utf8', (err, data) => {
        let res = new Result()
        if (err) {
          reject(res)
        } else {
          const results = JSON.parse(data)

          if (results.listing) {
            results.listing.map((entry) => {
              entry.title = `${entry.num_bedrooms} bed ${entry.property_type.toLowerCase()} for sale`
              entry.price = entry.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            })
          }
          resolve(results)
        }
      })
    })
  }

  return {
    search: search,
    count: count
  }
})()
