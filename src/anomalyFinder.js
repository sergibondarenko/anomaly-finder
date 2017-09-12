class AnomalyFinder {
  
  construct() {}

  /**
  * Calculating expected value (EX) of a list of values.
  * https://en.wikipedia.org/wiki/Expected_value
  *
  * @param {array} values - list of values
  * @param {integer} pow - power to be used during summation
  * @returns {float}
  */
  expectedValue(values, pow = 1) {
    const accuracy = 0.1;
    let sum = 0;

    if (!values.length) return 0;

    for(let i = 0; i < values.length; i++) {
      sum += Math.pow(values[i], pow) / accuracy;
    } 
    return sum / (values.length / accuracy); 
  }

  /**
  * Calculating standard deviation (sigma) of a list of values.
  * https://en.wikipedia.org/wiki/Standard_deviation
  *
  * @param {array} values - list of values
  * @param {float} ex - expected value (EX)
  * @returns {float}
  */
  standardDeviation(values, ex) {
    const ex2 = this.expectedValue(values, 2);
    ex = ex || this.expectedValue(values);
    return Math.sqrt(ex2 - Math.pow(ex, 2)); 
  }

  /**
  * Check (three-sigma rule of thumb) value if it is anomaly (true/false).
  * https://en.wikipedia.org/wiki/68%E2%80%9395%E2%80%9399.7_rule
  *
  * @param {array} normalValues - list of normal values
  * @param {integer} value - a value to check against the normal values
  * @returns {boolean} 
  */
  find(normalValues, value) {
    const ex = this.expectedValue(normalValues);
    const stdv = this.standardDeviation(normalValues, ex);
    return !(Math.abs(ex - value) <= (3 * stdv));
  }
};

module.exports = AnomalyFinder;
