const express = require('express')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + req.body.creatorId + '-' + file.originalname)
  }
})
const router = express.Router()
const {createContent,
  getCommunityContent,
  deleteCommunityContent,
  likeContent,
  deleteComment,
  createComment,
  getContentComments,
shareContentToCommunity} = require('../controllers/createContentController')

const upload = multer({ storage }) 


router.post('/createContent',upload.single("media"),createContent)
router.post('/getCommunityContent',getCommunityContent)
router.delete('/deleteContent',deleteCommunityContent)
router.post('/likeContent',likeContent)
router.post('/commentContent',createComment)
router.post('/shareContent',shareContentToCommunity)
router.delete('/deleteComment',deleteComment)
router.get('/getContentComments/:contentId',getContentComments)

module.exports = router