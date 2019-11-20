
let rateCounter = require('../index')
rate250Counter = new rateCounter();
rate25Counter = new rateCounter();

// setInterval(() => { rate250Counter.increment(); console.log("rate250Counter\t", rate250Counter.rate) }, 250);
//expected final output (after 60s)
//{ '1s': 4, '5s': 20, '10s': 40, '60s': 240 }

setInterval(() => { rate25Counter.increment(); console.log("rate25Counter\t", rate25Counter.rate) }, 25);
//expected final output (after 60s)
//{ '1s': 40, '5s': 200, '10s': 400, '60s': 2400 }