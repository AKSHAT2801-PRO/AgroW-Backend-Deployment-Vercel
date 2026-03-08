const mongoose = require("mongoose")
const serviceProviderSchema = new mongoose.Schema({
    userId : {
        type : String,
        required : true,
        unique : true
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    gender : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    district : {
        type : String,
        required : true
    },
    village : {
        type : String,
        required : true
    },
    serviceList : {
        type : Array,
        required : true
    },
    interestedList : {
        type : Array,
        required : true
    },
    joinedCommunities : {
        type : [String]
        
    }
})
const serviceProvider = mongoose.model("serviceProvider",serviceProviderSchema)

module.exports = serviceProvider