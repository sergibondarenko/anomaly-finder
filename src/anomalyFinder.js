class AnomalyFinder {
  
  construct() {}

  expectedValue(x, pow = 1) {
    const accuracy = 0.1;
    let sum = 0;

    if (!x.length) return 0;

    for(let i = 0; i < x.length; i++) {
      sum += Math.pow(x[i], pow) / accuracy;
    } 
    return sum / (x.length / accuracy); 
  }

  standardDeviation(x, ex) {
    const ex2 = this.expectedValue(x, 2);
    ex = ex || this.expectedValue(x);
    return Math.sqrt(ex2 - Math.pow(ex, 2)); 
  }

  find(x, value) {
    const ex = this.expectedValue(x);
    const stdv = this.standardDeviation(x, ex);
    return !(Math.abs(ex - value) <= (3 * stdv));
  }
}

const af = new AnomalyFinder();
const x = [ 5, 15, 30 ];

let isAnomaly = af.find(x, 1);
console.log(`is 1 anomaly: ${isAnomaly}`);

isAnomaly = af.find(x, 33);
console.log(`is 33 anomaly: ${isAnomaly}`);

isAnomaly = af.find(x, 55);
console.log(`is 55 anomaly: ${isAnomaly}`);
