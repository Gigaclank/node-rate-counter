# node-rate-counter
[![Build Status](https://travis-ci.com/Gigaclank/node-rate-counter.svg?branch=master)](https://travis-ci.com/Gigaclank/node-rate-counter)
[![npm version](https://badge.fury.io/js/node-rate-counter.svg)](https://badge.fury.io/js/node-rate-counter)
[![npm](https://img.shields.io/npm/dm/node-rate-counter.svg)]()

Calculate the incomming rate of anything.

# Installation
``` bash
npm install node-rate-counter
```
# Usage
``` js
let counter = new rateCounter()

setInterval(() => {
    counter.increment()
    rateCounter.clean_up(120000)//hold the last 120 seconds worth of data 
    console.log(counter.rate)
}, 100) //increment counter every 100ms (i.e rate of 10/s)


```

# N.B.
This module has a margin of error when using node js timers due to the nature of of node js. See this **[link](https://johnresig.com/blog/accuracy-of-javascript-time/)** for more detail

---
<p align="center" z-index = "-1">
  <img src="https://avatars2.githubusercontent.com/u/12459794?s=200&v=4"/>
</p>