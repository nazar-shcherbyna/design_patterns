class AbstractVehivle {
    timeTaken
    maxSpeed
    passengersCount

    travelInfo() {}
}

class Vehicle extends AbstractVehivle {
    travelInfo() {
        return `
            commute time: ${this.timeTaken}
            vehicle's max speed: ${this.maxSpeed}
            vehicles passengers count: ${this.passengersCount}
        `
    }
}

class Bus extends Vehicle {
    constructor() {
        super()
        this.timeTaken = 30
        this.maxSpeed = 50
        this.passengersCount = 24
    }
}

class Car extends Vehicle {
    constructor() {
        super()
        this.timeTaken = 10
        this.maxSpeed = 180
        this.passengersCount = 4
    }
}

class Taxi extends Vehicle {
    constructor() {
        super()
        this.timeTaken = 15
        this.maxSpeed = 90
        this.passengersCount = 7
    }
}

class Commute {
    travel(transport) {
        return transport.travelInfo()
    }
}

const commute = new Commute()
console.log(commute.travel(new Bus()));
console.log(commute.travel(new Taxi()));
console.log(commute.travel(new Car()));