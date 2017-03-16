/* global Feature Scenario */
Feature('Search')

Scenario('Empty search will reload the search form', (I) => {
  I.amOnPage('/search')
  I.see('Search')
  I.click('Search')
  I.waitForElement('form')
  I.seeElement('.search_error')
})

Scenario('Not found keywords will reload the search form', (I) => {
  I.amOnPage('/search')
  I.see('Search')
  I.fillField('form input[name=keyword]', 'SE1')
  I.click('Search')
  I.waitForElement('form')
  I.seeElement('.search_error')
})

Scenario('Found keyword will load the results page', (I) => {
  I.amOnPage('/search')
  I.see('Search')
  I.fillField('form input[name=keyword]', 'N11')
  I.click('Search')
  I.waitForElement('.result')
  I.seeInCurrentUrl('/results/N11')
  I.seeElement('.listing')
  I.seeElement('.results-count')
  I.seeElement('.listing_image')
  I.seeElement('.listing_title')
  I.seeElement('.listing_price')
  I.seeElement('.listing_description')
  I.seeElement('.agent_logo')
  I.seeElement('.agent_name')
  I.seeElement('.agent_address')
  I.seeElement('.agent_phone')
})
