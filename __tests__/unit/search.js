/* global describe test expect */
const listing = require('../../utils/search')

describe('search()', () => {
  test('an empty keword will return a result with zero entries', () => {
    return listing.search('')
      .then(null, (result) => {
        expect(result.result_count).toBe(0)
      })
  })

  test('a keword for a non-existing location will return a result with zero entries', () => {
    return listing.search('SE1')
      .then(null, (result) => {
        expect(result.result_count).toBe(0)
      })
  })

  test('an existing search will return a result some some entries', () => {
    return listing.search('N11')
      .then((result) => {
        expect(result.result_count).toBeGreaterThan(0)
      })
  })

  test('an existing lowercase search key will return a result some some entries', () => {
    return listing.search('n11')
      .then((result) => {
        expect(result.result_count).toBeGreaterThan(0)
      })
  })
})
