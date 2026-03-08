const content = require('../models/content')
const community = require("../models/Community")
const comment = require("../models/Comment")
async function createContent(req,res) {
    const body = req.body
    await content.create({
        communityId : body.communityId,
        creatorId : body.creatorId,
        title : body.title,
        description : body.description,
        media : req.file ? req.file.path : null,
        createdAt : body.createdAt,
        tags : body.tags
    }).then(async (content) => {
        await community.findByIdAndUpdate(body.communityId,{$push : {content : {contentId : content._id,contentCreatedOnAt : new Date().toISOString()}}})})
    .then(() => {
        return res.status(201).json({message : "Content created successfully"})
    }).catch((err) => {
        console.log(err)
        return res.status(500).json({message : "Error creating content",error : err})
    })
}


async function getCommunityContent(req,res) {
    const communityId = req.body.communityId
    await content.find({communityId : communityId}).then((contents) => {
        return res.status(200).json({message : "Content fetched successfully",contents : contents})
    }).catch((err) => {
        console.log(err)
        return res.status(500).json({message : "Error fetching content",error : err})
    })
}
async function deleteCommunityContent(req,res) {
    const contentId = req.body.contentId
    await content.findByIdAndDelete(contentId).then(() => {
        return res.status(200).json({message : "Content deleted successfully"})
    }).then(() => {
        community.findOneAndUpdate({content : {$elemMatch : {contentId : contentId}}},{$pull : {content : {contentId : contentId}}})
    })
    .catch((err) => {
        console.log(err)
        return res.status(500).json({message : "Error deleting content",error : err})
    })
}
async function likeContent(req,res) {
    const contentId = req.body.contentId
    const userId = req.body.userId
    await content.findById(contentId).then((content) => {
        if(content.likes.includes(userId)) {
            content.likes.pull(userId)
            content.save()
            return res.status(200).json({message : "Content unliked successfully"})
        }
        else{
            content.likes.push(userId)
            content.save()
            return res.status(200).json({message : "Content liked successfully"})
        }
    }).catch((err) => {
        console.log(err)
        return res.status(500).json({message : "Error liking content",error : err})
    })
}
async function createComment(req,res) {
    comment.create({
        communityId : req.body.communityId,
        contentId : req.body.contentId,
        creatorId : req.body.creatorId,
        commentText : req.body.commentText,
        createdAt : req.body.createdAt
    }).then((comment) => {
        content.findByIdAndUpdate(req.body.contentId,{$push : {comments : comment._id}}).then(() => {
            return res.status(201).json({message : "Comment added successfully"})
        }).catch((err) => {
            console.log(err)
            return res.status(500).json({message : "Error adding comment to content",error : err})
        })
    }).catch((err) => {
        console.log(err)
        return res.status(500).json({message : "Error creating comment",error : err})
    })
}
async function shareContentToCommunity(req,res) {
    const contentId = req.body.contentId
    const communityIds = req.body.communityId
    await content.findById(contentId).then((content) => {
        for (communityId of communityIds) {
            community.findByIdAndUpdate(communityId,{$push : {content : {contentId : content._id,contentCreatedOnAt : new Date().toISOString()}}}).catch((err) => {
                console.log(err)
                return res.status(500).json({message : "Error sharing content to community",error : err})
            })
        }
        return res.status(200).json({message : "Content shared to community successfully"})
    }).catch((err) => {
        console.log(err)
        return res.status(500).json({message : "Error sharing content to community",error : err})
    })
        
}   
async function deleteComment(req,res) {
    const commentId = req.body.commentId
    await comment.findByIdAndDelete(commentId).then(() => {
        return res.status(200).json({message : "Comment deleted successfully"})
    }).then(() => {
        content.findOneAndUpdate({comments : commentId},{$pull : {comments : commentId}})
    })
    .catch((err) => {
        console.log(err)
        return res.status(500).json({message : "Error deleting comment",error : err})
    })
}
async function getContentComments(req,res) {
    const contentId = req.params.contentId
    await content.findById(contentId).populate('comments').then((content) => {
        allComments = comment.find({_id : {$in : content.comments}}).then((comments) => {

            return res.status(200).json({message : "Comments fetched successfully",comments : comments})
        }).catch((err) => {
            console.log(err)
            return res.status(500).json({message : "Error fetching comments",error : err})
        })
    }).catch((err) => {
        console.log(err)
        return res.status(500).json({message : "Error fetching comments",error : err})
    })
}


module.exports = {
    createContent,
    getCommunityContent,
    deleteCommunityContent,
    likeContent,
    createComment,
    deleteComment,
    getContentComments,
    shareContentToCommunity
}