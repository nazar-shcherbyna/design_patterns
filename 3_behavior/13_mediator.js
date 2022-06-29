class User {
    constructor(name) {
        this.id = Date.now()
        this.name = name
        this.room = null
    }

    send(message, to) {
        this.room.send(message, this, to)
    }

    receive(message, from) {
        console.log(`id: ${from.id}: ${from.name} => ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to) {
        if (to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach((key) => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from)
                }
            })
        }
    }
}

const nazar = new User('Nazar')
const dasha = new User('Dasha')
const nelya = new User('Nelya')

const room = new ChatRoom()

room.register(nazar)
room.register(dasha)
room.register(nelya)

nazar.send('How are you?', dasha)
nelya.send('Whats up?', nazar)
nazar.send('Hello for everybody')