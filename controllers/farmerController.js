const farmer = require("../models/Farmer")
async function createFarmer(req,res){  // Create Farmer 
    const body = req.body
        await farmer.create({
            userId : body.userId, 
            firstName : body.firstName, 
            lastName : body.lastName, 
            email : body.email, 
            gender : body.gender,
            state : body.state, 
            district : body.district,
            village : body.village, 
            cropList : body.cropList,
            interestedList : body.interestedList,
            joinedCommunities : body.joinedCommunities
        })
        return res.json({status : "User Registered"})
}

async function getFarmer(req,res){
    var email = req.params.email
    email = email.replace("%40","@")
    const farmerData = await farmer.findOne({email : email})
    return res.json({status : "success", data : farmerData})
}


module.exports = {createFarmer,getFarmer}