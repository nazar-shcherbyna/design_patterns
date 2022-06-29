class Server {
    constructor(ip, port) {
        this.ip = ip
        this.port = port
    }

    get url() {
        return `https://${this.ip}:${this.port}`
    }
}

function aws(server) {
    server.isAws = true
    server.awsInfo = server.url
    return server
}

function azure(server) {
    server.isAzure = true
    server.azureInfo = server.url
    server.port += 500
    return server
}

const awsServer = aws(new Server('11.22.33.44', 8080))
const azureServer = azure(new Server('33.44.55.66', 8080))

console.log(awsServer, azureServer);