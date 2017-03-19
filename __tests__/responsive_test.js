/* global Feature Scenario */
Feature('Responsive')

Scenario('Small screen user', (I) => {
  const width = 360
  I.resizeWindow(width)
  I.amOnPage('/search')
  I.fillField('form input[name=keyword]', 'N11')
  I.click('Search')
  I.waitForElement('.result')
  I.seeElement('.listing')
    // Scenario: Small screen user
    //     Given a search was performed for "N11"
    //     When "results" page renders ordered list of results for given search term
    //     Then each result occupies full width of the screen
    //         And each result's items occupy full width of the screen
    //         And each result's items are left aligned

    // Scenario: Medium size screen user
    //     Given a search was performed for "N11"
    //     When "results" page renders ordered list of results for given search term
    //     Then each result is split into 2 rows
    //         And first row is split into 2 equally wide columns
    //         And first column renders "property image"
    //         And second column renders "property title" followed by "property price" and "property description"
    //         And last row occupies full width
    //         And contains "agent logo" followed by "agent name", "agent address" and "agent phone number"

    // Scenario: Large screen user
    //     Given a search was performed for "N11"
    //     When "results" page renders ordered list of results for given search term
    //     Then each result is split into 3 columns
    //         And first column renders "property image"
    //         And second column renders "property title" followed by "property price" and "property description"
    //         And last column renders "agent logo" followed by "agent name", "agent address" and "agent phone number"
})
