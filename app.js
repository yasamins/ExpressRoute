const express = require('express');
const app = express();
const moment = require('moment');
const requestIp = require('request-ip');
const browser = require('detect-browser');
const bodyParser = require('body-parser');
const morgan  = require('morgan');
const routes = require('./routes/users');
const secroute = require('./routes/cars');
const thirdroute = require('./routes/books');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

app.use(routes);
app.use(requestIp.mw());
app.use(bodyParser.json());
app.use(secroute);
app.use(thirdroute);

app.use(function(req, res, next) {
  console.log('Time: ', moment().format('MMMM Do.YYYY, h:mm:ss.a') + (req.protocol + '://' + req.get('host') + req.originalUrl)
+ (browser.name) +(browser.version));
  console.log(req.clientIp);
  next();
})

//http request logger
app.use(morgan('combined'));

app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })
//error handling middleware
app.use(function(err,req,res,next) {
  // console.log(err);
  res.status(422).send({error: err.message});
  res.render('error', {error: err})
});


  function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}
  app.listen(process.env.port || 3000, function(){
      console.log('now listening for requests');
  });
