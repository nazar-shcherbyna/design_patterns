function networkFetch(url) {
    return `${url} - response from server`
}

const cache = new Set()

const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        const url = args[0]
        if (cache.has(url)) {
            return `${url} - response from cache`
        }
        cache.add(url)
        return Reflect.apply(target, thisArg, args)
    },
})

console.log(proxiedFetch('urlGoogle'));
console.log(proxiedFetch('urlFacebook'));
console.log(proxiedFetch('urlGoogle'));

// let dictionary = {
//     'Hello': 'Hola',
//     'Bye': 'Adiós'
// };

// dictionary = new Proxy(dictionary, {
//     get(target, phrase) {
//         if (phrase in target) {
//             return Reflect.get(...arguments)
//         } else {
//             return phrase + ' - doesn\'t translate'
//         }
//     }
// })

// console.log(dictionary['Bye']);
// console.log(dictionary['Throw']);