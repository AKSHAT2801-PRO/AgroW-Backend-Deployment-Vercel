const community = require("../models/Community")
const farmer = require("../models/Farmer")
const serviceProvider = require("../models/ServiceProvider")
async function getAllCommunity(req,res) { 
    await community.find({}).then((data)=>{
        return res.json({status : "Success",data : data})
    }).catch((err)=>{
        return res.json({status : "Failed",message : err.message})
    })
}

async function searchCommunity(req,res) {
    const searchQuery = req.query.searchTerm
    await community.find({$or: [
        { communityName: { $regex: searchQuery, $options: "i" } },
        { state: { $regex: searchQuery, $options: "i" } },
        { district: { $regex: searchQuery, $options: "i" } },
        { village: { $regex: searchQuery, $options: "i" } }
        ]}
    )
    .then((data)=>{res.json({status : 'Searched',data: data})})
    .catch((err)=>{
        console.log(err)
        res.json({status : 'Failed',message : err.message})})
}

async function getUserCommunity(req,res) {
    const userId = req.params.userId
    const role = req.body.role
    if(role === "farmer" || role === "Farmer" || role === "FARMER" ){
        await farmer.findOne({userId : userId})
        .then((data)=>{ const joinedCommunities = data.joinedCommunities
        community.find({_id : {$in : joinedCommunities}})
        .then((communities)=>{
            return res.json({status : "Success",data : communities})
        }).catch((err)=>{
            console.log(err)
            return res.json({status : "Failed",message : err.message})
        })
        }).catch((err)=>{
            console.log(err)
            return res.json({status : "Failed",message : err.message})
        })
    }
    else if(role === "serviceProvider" || role ==="Provider" || role === "provider" || role === "ServiceProvider" || role === "SERVICEPROVIDER"){
        await serviceProvider.findOne({userId : userId})
        .then((data)=>{ const joinedCommunities = data.joinedCommunities
        community.find({_id : {$in : joinedCommunities}})
        .then((communities)=>{
            return res.json({status : "Success",data : communities})
        }).catch((err)=>{
            console.log(err)
            return res.json({status : "Failed",message : err.message})
        })
        }).catch((err)=>{
            console.log(err)
            return res.json({status : "Failed",message : err.message})
        })
    }
    
    
}


module.exports = {getAllCommunity,searchCommunity,getUserCommunity}