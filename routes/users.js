const express = require ('express');
const router = express.Router();

router.get('/user/:id', function (req, res) {
    res.send('Get a user by its Id');
  });
router.post('/user', function (req, res) {
    res.send('Add a new user');
  });

router.put('/user/:id', function (req, res) {
    res.send('Update the user');
  });

router.delete('/user/:id', function (req, res) {
  res.send('The user has been Deleted')
});
module.exports = router;



// app.route('/user')
//   .get('/user/:id', function (req, res) {
//     res.send('Get a random book')
//   })
//   .post('/user', function (req, res) {
//     res.send('Add a book')
//   })
//   .put('/user/:id', function (req, res) {
//     res.send('Update the book')
//   })
//   .delete('/user/:id', function(req, res) {
//     res.send('Deleting a user')
//   })
