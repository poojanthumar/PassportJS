const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');
const User = require('./models/user');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const passport = require("passport");
const passportLocal = require("./config/passport-local");
const { urlencoded } = require('express');

var cookieParser = require('cookie-parser');
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('assets'));
app.set('view engine', 'ejs');
app.set('views', './views');



app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(session({ 
    name: 'passport', 
    secret: 'debugerr',
    saveUninitialized: false,
    resave: false,
    cookie: {maxAge: (1000*60*30)}
}))

app.use(passport.initialize());

app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/', require('./routes/routes-home'));

app.listen(port, function(err){
    if (err) {console.log(err,  "Error in Running Server"); return}

    console.log("Server Running");
})