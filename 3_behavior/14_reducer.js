class Subject {
    constructor() {
        this.observers = []
    }

    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer)
    }

    fire(action) {
        this.observers.forEach(observer => {
            observer.update(action)
        })
    }
}

class Reducer {
    constructor(state = 1) {
        this.state = state
        this.initialState = state
    }

    update(action) {
        switch (action.type) {
            case 'INCREMENT':
                this.state = ++this.state
                break
            case 'DECREMENT':
                this.state = --this.state
                break
            case 'ADD': 
                this.state += action.payload || 1
                break
            default:
                this.state = this.initialState 
        }
    }
}

const stream$ = new Subject()

const obs1 = new Reducer()
const obs2 = new Reducer(98)

stream$.subscribe(obs1)
stream$.subscribe(obs2)

stream$.fire({type: 'INCREMENT'})
stream$.fire({type: 'ADD', payload: -74})
stream$.fire({type: 'DECREMENT'})

console.log(obs1.state);
console.log(obs2.state);