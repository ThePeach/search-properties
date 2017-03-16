/* global describe test expect */
const listing = require('../../utils/listing')

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

  test('all listing items contain the needed keys', () => {
    return listing.search('N11')
      .then(result => {
        expect(result.listing.length).toBeGreaterThan(0)
        for (let i = 0; i < result.listing.length; i++) {
          expect(result.listing[i].num_bedrooms).toBeDefined()
          expect(result.listing[i].property_type).toBeDefined()
          expect(result.listing[i].description).toBeDefined()
          expect(result.listing[i].details_url).toBeDefined()
          expect(result.listing[i].price).toBeDefined()
          expect(result.listing[i].image_url).toBeDefined()
          expect(result.listing[i].agent_name).toBeDefined()
          expect(result.listing[i].agent_logo).toBeDefined()
          expect(result.listing[i].agent_phone).toBeDefined()
          expect(result.listing[i].agent_postcode).toBeDefined()
          expect(result.listing[i].agent_address).toBeDefined()
          expect(result.listing[i].title).toBe(`${result.listing[i].num_bedrooms.toLowerCase()} bed ${result.listing[i].property_type.toLowerCase()} for sale`)
          expect(result.listing[i].price.match(/([0-9]|,)+/)).toBeTruthy()
        }
      })
  })
})

describe('count()', () => {
  test('an empty keyword will return a result with zero entries', () => {
    return listing.count('')
      .then(null, result => {
        expect(result.result_count).toBe(0)
      })
  })

  test('a keyword for a non-existing location will return a result with zero entries', () => {
    return listing.count('SE1')
      .then(null, result => {
        expect(result.result_count).toBe(0)
      })
  })

  test('a keyword for an existing location will return a result with a count greater than 0', () => {
    return listing.count('N11')
      .then(result => {
        expect(result.result_count).toBeGreaterThan(0)
      })
  })

  test('a lowercase keyword for an existing location will return a result with a count greater than 0', () => {
    return listing.count('n11')
      .then(result => {
        expect(result.result_count).toBeGreaterThan(0)
      })
  })
})
