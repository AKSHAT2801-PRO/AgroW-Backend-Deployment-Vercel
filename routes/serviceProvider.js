const express = require("express")
const router = express.Router()
const {createServiceProvider,getServiceProvider} = require("../controllers/serviceProviderController")
router.post("/create",createServiceProvider)
router.get("/get/:email",getServiceProvider)
module.exports = router