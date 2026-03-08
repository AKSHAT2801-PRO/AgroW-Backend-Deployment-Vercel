
const mongoose = require("mongoose")
const contentSchema = new mongoose.Schema({
    communityId : {
        type : String,
        required : true
    },
    creatorId : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
    },
    media : {
        type : [String]
    },
    likes : {
        type : [String],
        default : 0
    },
    comments : {
        type : [String],
    },
    createdAt : {
        type : String,
        required : true
    },
    tags : {
        type : [String]
    }
})
const content = mongoose.model("contents",contentSchema)

module.exports = content