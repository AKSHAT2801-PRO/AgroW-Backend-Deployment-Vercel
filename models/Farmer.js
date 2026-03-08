const mongoose = require("mongoose")
const farmerSchema = new mongoose.Schema({
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
    cropList : {
        type : [String],
        required : true
    },
    interestedList : {
        type : [String],
        required : true
    },
    joinedCommunities : {
        type : [String]
    }
})
const farmer = mongoose.model("farmers",farmerSchema)

module.exports = farmer