class OldCalc {
    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return t1 + t2
            case 'substract': return t1 - t2
            default: return NaN
        }
    }
}

class NewCalc {
    add(t1, t2) {
        return t1 + t2
    }

    substract() {
        return t1 - t2
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc()
    }

    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return this.calc.add(t1, t2)
            case 'substract': return this.calc.substract(t1, t2)
            default: return NaN
        }
    }
}

const oldCalc = new OldCalc()
console.log(oldCalc.operations(10, 12, 'add'));

const newCalc = new NewCalc()
console.log(newCalc.add(10, 12));

const calcAdapter = new CalcAdapter()
console.log(calcAdapter.operations(10, 12, 'add'));