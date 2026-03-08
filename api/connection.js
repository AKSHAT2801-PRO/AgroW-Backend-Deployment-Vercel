const mongoose = require("mongoose")

async function connectMongoDb(uri){
    return await mongoose.connect(uri).then(console.log("AgroW DataBase Connected Successfully...")).catch((err)=> console.log(err))
}

module.exports = {connectMongoDb}