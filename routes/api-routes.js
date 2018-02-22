var express = require('express')
var postControl = require('../controller/postController')

var router = express.Router()

router.route('/api/posts')
  .get(postControl.allPost)
  .post(postControl.addPost)
  .put(postControl.updatePost)

router.route('/api/posts/:id')


module.exports = router
