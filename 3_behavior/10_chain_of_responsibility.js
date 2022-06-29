class MySum {
    constructor(initialValue = 0) {
        this.sum = initialValue
    }

    add(value) {
        this.sum += value
        return this
    }
}

const sumOne = new MySum()

console.log(sumOne.add(10).add(33).add(28).add(58).add(1).sum);