const { NotImplementedError } = require('../extensions/index.js');

function getDNSStats(domains) {
  const stats = {};

  domains.forEach(domain => {
    const parts = domain.split('.').reverse();
    let current = '';

    parts.forEach(part => {
      current += `.${part}`;
      stats[current] = (stats[current] || 0) + 1;
    });
  });

  return stats;
}

module.exports = {
  getDNSStats
};
