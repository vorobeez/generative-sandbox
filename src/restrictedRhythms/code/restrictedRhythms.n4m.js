const maxAPI = require('max-api');
const { getCombinationsWithRestrictedIntervals } = require('generative-tools');

function getRandomInteger(max) {
  return Math.floor(Math.random() * max);
}

maxAPI.addHandlers({
  getRandomRestrictedRhythm: (n, r, ...allowedIntervals) => {
    const rhythms = getCombinationsWithRestrictedIntervals(n, r, new Set(allowedIntervals));

    maxAPI.outlet(rhythms[getRandomInteger(rhythms.length - 1)]);
  },
});