const express = require("express")
const router = express.Router()
const {createFarmer,getFarmer} = require('../controllers/farmerController')
const { get } = require("mongoose")
router.post("/create",createFarmer)
router.get("/get/:email",getFarmer)

module.exports = router