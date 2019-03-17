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

app.get('/', function (req, res) {
    res.send("Hello from root route");
});
app.use('/api/todos', todoRoutes);

app.get('/routs', function (req, res) {
    res.render('./routes/todos');
});


app.listen(port, ip, function () {
    var date = new Date();
    console.log('Server is listening on ' + port + ' at ' + date);
});