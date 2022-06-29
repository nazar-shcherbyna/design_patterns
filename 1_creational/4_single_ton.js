class DataBase {
    constructor(data) {
        if (DataBase.exists) {
            return DataBase.instance
        }
        DataBase.instance = this
        DataBase.exists = true
        this.data = data
    }

    getData() {
        return this.data
    }
} 

const mongo = new DataBase('Mongo')
const pg = new DataBase('PG')
console.log(mongo.getData(), pg.getData());