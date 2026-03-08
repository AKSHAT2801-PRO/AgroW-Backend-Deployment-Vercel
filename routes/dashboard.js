const express = require("express")
const {getAllCommunity,searchCommunity,getUserCommunity} = require("../controllers/dashboardController")
const router = express.Router()

router.get('/allCommunity',getAllCommunity) // Get All Communities
router.get('/searchCommunity',searchCommunity) // Search Communities
router.post('/getUserCommunity/:userId',getUserCommunity) // Get User Communities
module.exports = router