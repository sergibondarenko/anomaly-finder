import AnomalyFinder from 'anomaly-finder';

const af = new AnomalyFinder();

const normalValues = [ 5, 15, 30 ];
const valuesToCheck = [ 1, 33, 55 ];

for (let i = 0; i < valuesToCheck.length; i++) {
  console.log(`${valuesToCheck[i]} is anomaly: ${af.find(normalValues, valuesToCheck[i])}`); 
}
