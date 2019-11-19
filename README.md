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
let counter = new rateCounter(120000)//120 seconds retention period

setInterval(() => {
    counter.increment()
    console.log(counter.rate)
}, 100)
```
---
<p align="center" z-index = "-1">
  <img src="https://avatars2.githubusercontent.com/u/12459794?s=200&v=4"/>
</p>