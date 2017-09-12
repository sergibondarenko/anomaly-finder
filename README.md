# anomaly-finder
Simple anomaly detector based on the [three-sigma rule of thumb](https://en.wikipedia.org/wiki/68%E2%80%9395%E2%80%9399.7_rule).

Example of usage:
```
import AnomalyFinder from 'anomaly-finder';

const af = new AnomalyFinder();

const normalValues = [ 5, 15, 30 ];
const valuesToCheck = [ 1, 33, 55 ];

let isAnomaly;
for (let i = 0; i < valuesToCheck.length; i++) {
  isAnomaly = af.find(normalValues, valuesToCheck[i]);
  console.log(`${valuesToCheck[i]} is anomaly: ${isAnomaly}`); 
}

```
1. `noramlValues` - values that are seen regularly in a working system and are considered normal.
2. `valuesToCheck` - new value to check against the list of normal values `normalValues`.

This module was inspired by [anomaly-detector](https://github.com/uhho/anomaly-detector) module.
