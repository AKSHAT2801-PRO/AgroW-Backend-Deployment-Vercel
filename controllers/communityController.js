const community = require("../models/Community")
async function createCommunity(req,res) {
    const body = req.body
    await community.create({
        communityName : body.communityName,
        membersId : body.membersId,
        content : [],
        state : body.state,
        district : body.district,
        village : body.village,
        communitySearchTagList : body.communitySearchTagList,
        communityCreatedOn : body.communityCreatedOn
    })
    return res.json({status : "Community Created"})   
}

module.exports = {createCommunity}