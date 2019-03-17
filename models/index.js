const mongoose = require("mongoose");
mongoose.set("debug", true);

const MONGO_URL = 'mongodb://localhost/todo-api';

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true
});

mongoose.connection.once('open', function () {
    console.log('Connection has been made, now go and robo-tobo!!!')
}).on('error', function (error) {
    console.log('Connection problem: ' + error)
})

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');