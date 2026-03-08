const farmer = require("../models/Farmer")
const serviceProvider = require("../models/ServiceProvider")
const community = require("../models/Community")
async function addMember(req,res){
    const body = req.body
    const communityId = body.communityId
    const role = body.role
    const memberId = req.params.userId
    const comm = await community.findById(communityId)
    await comm.membersId.push(memberId)
    await comm.save()
    if (role === "farmer" || role === "Farmer" || role === "FARMER"){
        await farmer.findOneAndUpdate({userId : memberId},{$push : {joinedCommunities : communityId}})
    }
    else if(role === "serviceProvider" || role ==="Provider" || role === "provider"){
        await serviceProvider.findOneAndUpdate({userId : memberId},{$push : {joinedCommunities : communityId}})
    }
    return res.json({status : "Member Added"})
}

module.exports = {addMember}