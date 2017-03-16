const fs = require('fs')
const path = require('path')

module.exports = (function () {
  function Result () {
    this.result_count = 0
    this.area = null
    this.listing = []
  }

  /**
   * Tis but a wrapper for any other search, currently using file system search
   *
   * @param {String} keyword
   */
  function search (keyword) {
    // normalise
    keyword = keyword.toUpperCase()

    return new Promise((resolve, reject) => {
      const filePath = path.join(__dirname, `../data/${keyword}.json`)

      fs.readFile(filePath, 'utf8', (err, data) => {
        let res = new Result()
        if (err) {
          reject(res)
        } else {
          resolve(JSON.parse(data))
        }
      })
    })
  }

  return {
    search: search
  }
})()
