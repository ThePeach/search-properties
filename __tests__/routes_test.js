/* global Feature Scenario */
Feature('Routes')

Scenario('test index ', (I) => {
  I.amOnPage('/')
  I.see('Not Found')
})

Scenario('test search', (I) => {
  I.amOnPage('/search')
  I.see('Search for houses and flats for sale across the UK')
})

Scenario('test empty result page', (I) => {
  I.amOnPage('/result')
  I.see('Not Found')
})
