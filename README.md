# Property Search

This is a small Node.js property listing search engine, using JSON as data source.

## How to run it

First of all clone the repository:

    $ git clone git@github.com:ThePeach/search-properties.git
    $ cd search-properties

### Requirements

This project has been created using Node.js v7.6.0.

You can either install it manually or if you have [NVM](https://github.com/creationix/nvm) you can just follow these commands:

    $ nvm install
    $ nvm use

### Installing dependencies

All dependencies are installed via `npm`, just run

    $ npm install

### Starting the server

To start the server just run:

    $ npm run serve

You can then point your browser to [http://localhost:3000](http://localhost:3000)

### Tests

There are both unit and e2e tests which can be executed with:

    $ npm run test
    $ npm run codeceptjs run --steps

## What has been done

The project features the following tools:

- [Express.js](http://expressjs.com/) with [Handlebar](https://handlebarsjs.com) as templating engine
- SASS with [Susy](http://susy.oddbird.net) as grid framework, which gets compiled using an Express middleware
- [Jest](https://facebook.github.io/jest/) for Unit Tests
- [CodeceptJS](http://codecept.io) with [NightmareJS](http://www.nightmarejs.org/) for e2e tests

## Some notes on the project

This project has taken roughly 7 hours to complete. Some more details can be found in the [Requirements](./docs/requirements.md) document.

The responsiveness of the application has not been tested, as it would have required switching over to Selenium Webdriver and implement a custom helper in order to grab the computed size of the various elements.
