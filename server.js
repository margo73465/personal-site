var express = require('express');
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;

app.get('/', function (req, res) {
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});
