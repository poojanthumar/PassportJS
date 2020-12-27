const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use(new localStrategy ({ usernameField: 'email' }, function(email, password, done){
    User.findOne({email: email}, function(err, user){
        if(err) { console.log("Error in Serialize"); return done(err); }
        else if(user.password != password) {return done (null,false);}
        else return done(null , user.id);
    })
}
))

passport.serializeUser(function(user,done){
    done(null, user.id)
})

passport.deserializeUser(function(id, done){
    User.findById(id,function(err,user){
        if(err) {
            console.log("Error in Deserialize");
            return done(err);
        }
        return done(null, user);
    })
})

module.exports = passport; 