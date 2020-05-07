const clampOccurences = require('./index')

describe('Clamp Occurences functionnal test suite', () => {
    it('Should return a set of arrays with clamped occurences', () => {
        const testArray1 = [1, 2, 2, 2, 3, 3]
        const resultArray1 = [1, 2, 3]
        const testArray2 = [1, 2, 2, 2, 3, 3]
        const resultArray2 = [1, 2, 2, 3, 3]

        let result = clampOccurences(1, testArray1)

        expect(result).toMatchObject(resultArray1)
        expect(result).not.toMatchObject(resultArray2)

        result = clampOccurences(2, testArray2)

        expect(result).toMatchObject(resultArray2)
        expect(result).not.toMatchObject(resultArray1)
    })
})
