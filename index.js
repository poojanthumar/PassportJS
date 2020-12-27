const express = require('express');
const port = 8000;
const db = require('./config/mongoose');
const User = require('./models/user');
const expressLayouts = require('express-ejs-layouts');


const app = express();


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static('assets'));

app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use('/', require('./routes/routes-home'));

app.listen(port, function(err){
    if (err) {console.log(err,  "Error in Running Server"); return}

    console.log("Server Running");
})