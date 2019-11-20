module.exports = class rateCounter {
    constructor() { //i.e 1000ms
        this.reqTimes = []
    }
    increment() {
        let now = new Date()
        // console.log(now.getTime())
        this.reqTimes.push(now)
    }
    // get some basic rates through a property read
    get rate() {
        return {
            '1s': this.calculate_rate(1000),
            '5s': this.calculate_rate(5000),
            '10s': this.calculate_rate(10000),
            '60s': this.calculate_rate(60000),
        }
    }
    //clean up the array to avoid overflow and memory leaks
    clean_up(maxInterval) {
        let now = new Date()
        this.reqTimes = this.reqTimes.filter(i => (now.getTime() - i.getTime()) < maxInterval)
    }

    // calculate custom interval rate
    calculate_rate(interval) {
        let now = new Date()
        let count = this.reqTimes.filter(i => {
            return (now.getTime() - i.getTime()) < interval
        })
        return count.length
    }
    //get raw total count of reqTimes
    get count() {
        return this.reqTimes.length
    }
}


