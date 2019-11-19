var assert = require('assert');
var sinon = require('sinon');
let rateCounter = require('../index')
rateCounter = new rateCounter(5000);
//since we are using sinon we need to use reqTime.length and not the calculate rate function
describe('rate counter works', function () {
    beforeEach(function () {
        this.clock = sinon.useFakeTimers();
    });
    afterEach(function () {
        this.clock = sinon.restore();
        rateCounter.reqTimes = []//empty counter
    });
    it('1 / s', function () {
        countOverPeriod(1000)
        this.clock.tick(1 * 1000);
        assert.equal(rateCounter.reqTimes.length, 1)
    });
    it('10 / s', function () {
        countOverPeriod(1000)
        this.clock.tick(1 * 10000);
        assert.equal(rateCounter.reqTimes.length, 10)
    });
    it('100 / s', function () {

        countOverPeriod(1000)
        this.clock.tick(100 * 1000);
        assert.equal(rateCounter.reqTimes.length, 100)
    });
    it('1000 / s', function () {
        countOverPeriod(1000)
        this.clock.tick(1000 * 1000);
        assert.equal(rateCounter.reqTimes.length, 1000)
    });

});


function countOverPeriod(interval) {
    setInterval(function () { rateCounter.increment() }, interval);
}