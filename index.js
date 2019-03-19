var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

var port = process.env.PORT || '8080';
var ip = process.env.IP || '127.0.0.1';
var todoRoutes = require('./routes/todos');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});
app.use('/api/todos', todoRoutes);

app.get('/routes', function (req, res) {
    res.render('./routes/todos');
});


app.listen(port, ip, function () {
    var date = new Date();
    console.log('Server is listening on ' + port + ' at ' + date);
});