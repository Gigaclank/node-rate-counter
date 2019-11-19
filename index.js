module.exports = class rateCounter {
    constructor(maxInterval) { //i.e 1000ms
        this.reqTimes = []
        this.maxInterval = maxInterval
    }
    increment() {
        let now = new Date()
        // this.reqTimes = this.reqTimes.filter(i => (now.getTime() - i.getTime()) < this.maxInterval)
        this.reqTimes.push(new Date())
        // console.log(this.reqTimes)

    }
    get rate() {
        return {
            '1s': this.calculate_rate(1000),
            '5s': this.calculate_rate(5000),
            '10s': this.calculate_rate(10000),
            '60s': this.calculate_rate(60000),
        }
    }

    calculate_rate(interval) {
        let now = new Date()
        let count = this.reqTimes.filter(i => (now.getTime() - i.getTime()) < interval)
        return count.length
    }
}


