class MyIterator {
    constructor(data = []) {
        this.index = 0
        this.data = data
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false,
                    }
                } else {
                    this.index = 0 
                    return {
                        done: true,
                        value: void 0,
                    }
                }
            }
        }
    }
}

// const iterator = new MyIterator(['this', 'is', 'iterator'])

// for (const val of iterator) {
//     console.log(val);
// }

function* geterator(collection) {
    let index = 0
    
    while (index < collection.length) {
        yield collection[index++]
    }
}

const gen = geterator(['this', 'is', 'iterator'])

// for (const val of geterator(gen)) {
//     console.log(val);
// }

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);