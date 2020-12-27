const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/passport');

const db = mongoose.connection;

db.on('err', console.error.bind(console, "Error"));
db.once('open', function(){
    console.log('Connected to DB');
});

module.exports = db;

