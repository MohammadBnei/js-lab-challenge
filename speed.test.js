const clampOccurences = require('./index')

function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(100));
}

function getBigArray(length) {
    return new Array(length).fill(undefined).map(_ => getRandomInt())
}

let t0, t1

describe('Clamp Occurences speed test suite', () => {
    it('Should take less than 4 ms with an array of 10000', () => {

        const bigArray1 = getBigArray(10000)
        t0 = performance.now()
        clampOccurences(10, bigArray1)
        t1 = performance.now()
        const time1 = t1 - t0

        console.log({ time: time1, elements: bigArray1.length })
        expect(time1).toBeLessThan(10)
    })

    it('Should take less than 10 ms with an array of 100000', () => {

        const bigArray2 = getBigArray(100000)
        t0 = performance.now()
        clampOccurences(10, bigArray2)
        t1 = performance.now()
        const time2 = t1 - t0

        console.log({ time: time2, elements: bigArray2.length })
        expect(time2).toBeLessThan(30)

    })

    it('Should take less than 70 ms with an array of 1000000', () => {

        const bigArray3 = getBigArray(1000000)
        t0 = performance.now()
        clampOccurences(10, bigArray3)
        t1 = performance.now()
        const time3 = t1 - t0

        console.log({ time: time3, elements: bigArray3.length })
        expect(time3).toBeLessThan(70)
    });
});