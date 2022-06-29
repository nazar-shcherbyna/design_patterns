class Light {
    constructor(light) {
        this.light = light
    }
}

class RedLight extends Light {
    constructor() {
        super('red')
    }

    sigh() {
        return 'STOP'
    }
}

class YellowLight extends Light {
    constructor() {
        super('yellow')
    }

    sigh() {
        return 'GETTING READY'
    }
}

class GreenLight extends Light {
    constructor() {
        super('green')
    }

    sigh() {
        return 'GO'
    }
}

class TrafficLight {
    constructor() {
        this.states = [
            new RedLight(),
            new YellowLight(),
            new GreenLight(),
        ]
        this.current = this.states[0]
    }

    change() {
        const total = this.states.length
        const index = this.states.findIndex(trL => trL === this.current)

        if (index + 1 < total) {
            this.current = this.states[index + 1]
        } else {
            this.current = this.states[0]
        }
    }

    sign() {
        return this.current.sigh()
    }
}

const trafficLight = new TrafficLight()

console.log(trafficLight.sign());
trafficLight.change()
console.log(trafficLight.sign());
trafficLight.change()
console.log(trafficLight.sign());
trafficLight.change()
console.log(trafficLight.sign());