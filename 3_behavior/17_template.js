class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibility() {}

    getPaid() {
        return `My salary is ${this.salary}`
    }

    work() {
        return `Do ${this.responsibility()}`
    }
}

class Programmer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibility() {
        return 'programs'
    }
}

class Designer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibility() {
        return 'design'
    }
}

const programmer = new Programmer('Nazar', 3000)
const designer = new Designer('Darya', 1500)

console.log(programmer.work());
console.log(designer.work());