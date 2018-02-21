var db = require('../models')

module.exports = {
  allPost: function (req, res) {
    db.Posts.findAll({
      where: {
        isDeleted: false,
      }
    }).then(data => {
      res.status(200).json(data)
    }).catch(error => {
      console.log(error)
    })
  },
  addPost: function (req, res) {
    console.log(req.body)
    db.Posts.create(req.body).then(() => {
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
    }).then((data) => {
      if(data[0] === 0){
        res.status(404).send('No affected data')
      } else {
        res.status(200).send('Post updated')
      }
    }).catch(error => {
      console.log(error)
    })
  }
}
