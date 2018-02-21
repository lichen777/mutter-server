var express = require('express')
var postControl = require('../controller/postController')

var router = express.Router()

router.route('/api/posts')
  .get(postControl.allPost)
  .post(postControl.addPost)

router.route('/api/posts/:id')
  .put(postControl.updatePost)

module.exports = router
