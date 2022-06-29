class SimpleMembership {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}

class StandatdMembership {
    constructor(name) {
        this.name = name
        this.cost = 150
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name
        this.cost = 300
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standatd: StandatdMembership,
        premium: PremiumMembership,
    }

    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new Membership(name)
        member.type = type
        member.define = function() {
            console.log(`type: ${this.type}, name: ${this.name}, cost: ${this.cost}`)
        }
        return member
    }
}

const factory = new MemberFactory()

const members = [
    factory.create('Nazar', 'premium'),
    factory.create('Alina', 'simple'),
    factory.create('Dasha', 'standatd'),
]

members.forEach(member => {
    member.define()
})