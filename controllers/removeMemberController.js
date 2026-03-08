const community = require("../models/Community")
const farmer = require("../models/Farmer")
const serviceProvider = require("../models/ServiceProvider")
async function removeMember(req,res){
    const body = req.body
    const role = body.role
    const communityId = body.communityId
    const memberId = req.params.userId
    const comm = await community.findById(communityId)
    await comm.membersId.pull(memberId)
    await comm.save()
    if(role === "farmer"){
        await farmer.findOneAndUpdate({userId : memberId},{$pull : {joinedCommunities : communityId}})
    }
    else if(role === "serviceProvider"){
        await serviceProvider.findOneAndUpdate({userId : memberId},{$pull : {joinedCommunities : communityId}})
    }

    return res.json({status : "Member removed"})
}

module.exports = {removeMember}