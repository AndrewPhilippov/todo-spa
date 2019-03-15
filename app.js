var express = require('express'),
    app = express();

app.get('/', function (req, res) {
    res.send("Hello World");
});


var port = process.env.PORT || '8080';
var ip = process.env.IP || '127.0.0.1';


app.listen(port, ip, function () {
    var date = new Date();
    console.log('Server is listening on ' + port + ' at ' + date);
});