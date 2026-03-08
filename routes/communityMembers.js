const express = require("express")
const router = express.Router()
const {addMember} = require('../controllers/addMemberController')
const {removeMember} = require('../controllers/removeMemberController')

router.put("/addMember/:userId",addMember)
router.delete("/removeMember/:userId",removeMember)

module.exports = router