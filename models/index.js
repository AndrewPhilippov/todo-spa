const mongoose = require('mongoose');
mongoose.set('debug', true);

const MONGO_URL = 'mongodb://Andrew:ToDoSPA1@ds113375.mlab.com:13375/todo_spa';

MongoClient.connect(MONGO_URL, (err, db) => {
    if (err) {
        return console.log(err);
    }

    // Do something with db here, like inserting a record
    db.collection('notes').insertOne({
            title: 'Hello MongoDB',
            text: 'Hopefully this works!'
        },
        function (err, res) {
            if (err) {
                db.close();
                return console.log(err);
            }
            // Success
            db.close();
        }
    )
});

mongoose.Promise = Promise;