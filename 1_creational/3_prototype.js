const car = {
    wheels: 4,

    define() {
        console.log(`I have ${this.wheels} wheels and my owner is ${this.owner}`)
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Nazar',
        writable: false,
    }
})

console.log(carWithOwner.__proto__ === car)

carWithOwner.define()