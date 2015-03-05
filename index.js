var express = require('express');
var db = require('pg');
var twitter_api = require('node-twitter-api');
var app = express();

var client = db.Client(process.env.DATABASE_URL);

var twitter = new twitter_api({
  consumerKey: process.env.RD_TOKEN,
  consumerSecret: process.env.RD_TOKEN_SECRET,
  callback: 'http://earl-of-urvxt.herokuapp.com/botlist/auth_complete'
})

app.set('port', (process.env.PORT || 5000));
app.use('/', express.static(__dirname + '/public'));

app.get('/hello', function(request, response) {
  response.send('HELLO WORLD TEST PAGE CREATED');
});

app.param('id', /^\d+$/);
app.param('username', /^[A-Za-z0-9_]{1,15}$/);

var server = app.listen(app.get('port'), function() {
  var host = server.address().address
  var port = server.address().port
  
  console.log("urvxt-urabe I/O online at port " + app.get('port'));
});
