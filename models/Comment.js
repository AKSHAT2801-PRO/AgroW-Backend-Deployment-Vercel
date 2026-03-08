const mongoose = require("mongoose")
const content = require("./Content")
const commentSchema = new mongoose.Schema({
    communityId : {
        type : String,
        required : true
    },
    contentId : {
        type : String,
        required : true
    },
    creatorId : {
        type : String,
        required : true,
    },
    commentText : {
        type : String,
        required : true,
    },
    createdAt : {
        type : String,
        required : true,
    }
})
const comment = mongoose.model("comments",commentSchema)
module.exports = comment