const mongoose = require("mongoose")
const communitySchema = new mongoose.Schema({
    communityName : {
        type : String,
        required : true
    },
    membersId : {
        type : [String],
        required : true
    },

    content : [{contentId : String,contentCreatedOnAt : String}],

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
    communitySearchTagList : {
        type : "Array",
        required : true
    },
    communityCreatedOn : {
        type : String,
        required : true
    }
})
const community = mongoose.model("communities",communitySchema)

// community.insertMany([
//   {
//     "communityName": "Pusad Cotton Growers",
//     "state": "Maharashtra",
//     "district": "Yavatmal",
//     "village": "Pusad",
//     "communitySearchTagList": ["Cotton","Kharif","PestControl"],
//     "communityCreatedOn": 20260221
//   },
//   {
//     "communityName": "Vidarbha Soybean Farmers",
//     "state": "Maharashtra",
//     "district": "Akola",
//     "village": "Balapur",
//     "communitySearchTagList": ["Soybean","Organic","Fertilizer"],
//     "communityCreatedOn": 20260115
//   },
//   {
//     "communityName": "Marathwada Tur Dal Group",
//     "state": "Maharashtra",
//     "district": "Latur",
//     "village": "Ausa",
//     "communitySearchTagList": ["Tur","Rabi","MarketRates"],
//     "communityCreatedOn": 20260120
//   },
//   {
//     "communityName": "Punjab Wheat Experts",
//     "state": "Punjab",
//     "district": "Ludhiana",
//     "village": "Khanna",
//     "communitySearchTagList": ["Wheat","Irrigation","Seeds"],
//     "communityCreatedOn": 20251205
//   },
//   {
//     "communityName": "Sugarcane Progressive Farmers",
//     "state": "Uttar Pradesh",
//     "district": "Meerut",
//     "village": "Sardhana",
//     "communitySearchTagList": ["Sugarcane","DripIrrigation","FarmingTech"],
//     "communityCreatedOn": 20251130
//   },
//   {
//     "communityName": "Organic Vegetable Growers",
//     "state": "Karnataka",
//     "district": "Belagavi",
//     "village": "Gokak",
//     "communitySearchTagList": ["Vegetables","Organic","Compost"],
//     "communityCreatedOn": 20260201
//   },
//   {
//     "communityName": "Tomato Farmers Collective",
//     "state": "Andhra Pradesh",
//     "district": "Chittoor",
//     "village": "Madanapalle",
//     "communitySearchTagList": ["Tomato","Polyhouse","DiseaseControl"],
//     "communityCreatedOn": 20260128
//   },
//   {
//     "communityName": "Rice Cultivation Forum",
//     "state": "West Bengal",
//     "district": "Hooghly",
//     "village": "Chandannagar",
//     "communitySearchTagList": ["Paddy","WaterManagement","Nursery"],
//     "communityCreatedOn": 20251112
//   },
//   {
//     "communityName": "Millet Revolution Group",
//     "state": "Karnataka",
//     "district": "Raichur",
//     "village": "Sindhanur",
//     "communitySearchTagList": ["Millets","ClimateSmart","Nutrition"],
//     "communityCreatedOn": 20260205
//   },
//   {
//     "communityName": "Grapes Export Farmers",
//     "state": "Maharashtra",
//     "district": "Nashik",
//     "village": "Niphad",
//     "communitySearchTagList": ["Grapes","Export","ResidueFree"],
//     "communityCreatedOn": 20251222
//   },
//   {
//     "communityName": "Banana Growers Network",
//     "state": "Tamil Nadu",
//     "district": "Trichy",
//     "village": "Musiri",
//     "communitySearchTagList": ["Banana","TissueCulture","Fertilizer"],
//     "communityCreatedOn": 20260109
//   },
//   {
//     "communityName": "Onion Storage Farmers",
//     "state": "Maharashtra",
//     "district": "Ahmednagar",
//     "village": "Rahuri",
//     "communitySearchTagList": ["Onion","Storage","PriceAlert"],
//     "communityCreatedOn": 20260210
//   },
//   {
//     "communityName": "Groundnut Farming Circle",
//     "state": "Gujarat",
//     "district": "Junagadh",
//     "village": "Manavadar",
//     "communitySearchTagList": ["Groundnut","SoilHealth","Yield"],
//     "communityCreatedOn": 20260103
//   },
//   {
//     "communityName": "Horticulture Innovators",
//     "state": "Himachal Pradesh",
//     "district": "Shimla",
//     "village": "Theog",
//     "communitySearchTagList": ["Apple","Pruning","ColdClimate"],
//     "communityCreatedOn": 20251018
//   },
//   {
//     "communityName": "Spice Farmers Hub",
//     "state": "Kerala",
//     "district": "Idukki",
//     "village": "Kumily",
//     "communitySearchTagList": ["Pepper","Cardamom","Organic"],
//     "communityCreatedOn": 20251125
//   },
//   {
//     "communityName": "Drip Irrigation Users",
//     "state": "Rajasthan",
//     "district": "Jaipur",
//     "village": "Chomu",
//     "communitySearchTagList": ["WaterSaving","Drip","Subsidy"],
//     "communityCreatedOn": 20260211
//   },
//   {
//     "communityName": "Beekeeping & Pollination Group",
//     "state": "Haryana",
//     "district": "Karnal",
//     "village": "Nilokheri",
//     "communitySearchTagList": ["Beekeeping","Honey","Pollination"],
//     "communityCreatedOn": 20260117
//   },
//   {
//     "communityName": "Mango Orchard Farmers",
//     "state": "Uttar Pradesh",
//     "district": "Malihabad",
//     "village": "Kakori",
//     "communitySearchTagList": ["Mango","Orchard","Pruning"],
//     "communityCreatedOn": 20251215
//   },
//   {
//     "communityName": "Agri Machinery Sharing Group",
//     "state": "Madhya Pradesh",
//     "district": "Indore",
//     "village": "Sanwer",
//     "communitySearchTagList": ["Tractor","Implements","Rental"],
//     "communityCreatedOn": 20260202
//   },
//   {
//     "communityName": "Climate Smart Farming India",
//     "state": "Telangana",
//     "district": "Warangal",
//     "village": "Parkal",
//     "communitySearchTagList": ["Weather","Advisory","CropPlanning"],
//     "communityCreatedOn": 20260218
//   }
// ])
module.exports = community