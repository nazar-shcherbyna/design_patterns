// function Server(name, ip) {
//     this.name = name
//     this.ip = ip
// }

// Server.prototype.getUrl = function() {
//     return `https://${this.ip}:80`
// }

// Server.prototype.getDNS = function() {
//     return `https://8.8.8.8`
// }

class Server {
    constructor(name, id) {
        this.name = name
        this.id = id
    }

    getUrl() {
        return `https://${this.ip}:80`
    }

    getDNS() {
        return `https://8.8.8.8`
    }
}

const server = new Server('ownserver', 44334433)
console.log(server.getDNS(), server.getUrl());