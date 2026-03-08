const express = require("express")
const router = express.Router()
const {createCommunity} = require('../controllers/communityController')
router.post("/",createCommunity)

module.exports = router