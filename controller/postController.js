var db = require('../models')

module.exports = {
  allPost: function (req, res) {
    db.Posts.findAll({
      where: {
        isDeleted: false,
        userID: req.body.id
      }
    }).then(data => {
      res.status(200).json(data)
    }).catch(error => {
      console.log(error)
    })
  },
  addPost: function (req, res) {
    db.Posts.create({req}).then(() => {
      res.status(200).send('Post added')
    }).catch(error => {
      console.log(error)
    })
  },
  updatePost: function (req, res) {
    db.Posts.update({
      isDeleted: true
    }, 
    {
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.status(200).send('Post deleted')
    }).catch(error => {
      console.log(error)
    })
  }
}
