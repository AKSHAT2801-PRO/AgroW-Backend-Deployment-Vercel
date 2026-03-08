const serviceProvider = require('../models/ServiceProvider')
async function createServiceProvider(req,res){
    const body = req.body
    await serviceProvider.create({
        userId : body.userId, 
        firstName : body.firstName, 
        lastName : body.lastName, 
        email : body.email, 
        gender : body.gender,
        state : body.state, 
        district : body.district,
        village : body.village, 
        serviceList : body.serviceList,
        interestedList : body.interestedList,
        joinedCommunities : body.joinedCommunities
    })
    return res.json({status : "User Registered"})
    
}

async function getServiceProvider(req,res){
    var email = req.params.email
    email = email.replace("%40","@")
    const serviceProviderData = await serviceProvider.findOne({email : email})
    return res.json({status : "success", data : serviceProviderData})
}

module.exports = {createServiceProvider,getServiceProvider}