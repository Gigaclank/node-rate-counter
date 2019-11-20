var assert = require('assert');
var sinon = require('sinon');
let rateCounter = require('../index')
rateCounter = new rateCounter();
//since we are using sinon we need to use reqTime.length and not the calculate rate function
describe('rate counter works', function () {
    beforeEach(function () {
        this.clock = sinon.useFakeTimers();
    });
    afterEach(function () {
        rateCounter.clean_up(0) //empty counter i.e. hold 0ms worth of data
        this.clock = sinon.restore();
    });
    it('1 / s', function () {
        countOverPeriod(1000)
        this.clock.tick(1000);
        assert.equal(rateCounter.count, 1)
    });
    it('10 / s', function () {
        countOverPeriod(1000)
        this.clock.tick(10000);
        assert.equal(rateCounter.count, 10)
    });
    it('100 / s', function () {

        countOverPeriod(1000)
        this.clock.tick(100000);
        assert.equal(rateCounter.count, 100)
    });
    it('1000 / s', function () {
        countOverPeriod(1000)
        this.clock.tick(1000000);
        assert.equal(rateCounter.count, 1000)
    });

});


function countOverPeriod(interval) {
    setInterval(function () { rateCounter.increment() }, interval);
}