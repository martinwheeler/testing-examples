# Testing Examples

This project is designed to show examples of bad frontend implementation and the issues that can arise during development.

## Getting Started

1. Clone this project `git clone git@github.com:martinwheeler/testing-examples.git`
2. Run `yarn && yarn start` to start the local development server
3. The frontend app will load on [http://localhost:3000](http://localhost:3000) and the nodejs backend will load on [http://localhost:3001](http://localhost:3001)

## Notes

The NodeJS backend has 1 endpoint `/create` which will always fail and return a 500 status code. This is used with the examples to fake a server failure and show some frontend bugs.

## The Examples

1. Multi step form failure
2. Can't exit the dialog
3. Network failure but the UI shows a success message
4. Network failure but the loading spinner never stops
