const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== 'string' || 
    isNaN(parseFloat(sampleActivity)) || 
    parseFloat(sampleActivity) <= 0 || 
    parseFloat(sampleActivity) > MODERN_ACTIVITY
  ) {
    return false;
  }

  const activity = parseFloat(sampleActivity);
  const decayRate = Math.LN2 / HALF_LIFE_PERIOD;
  const age = Math.log(MODERN_ACTIVITY / activity) / decayRate;

  return age > 0 ? Math.ceil(age) : false;
}

module.exports = {
  dateSample
};
