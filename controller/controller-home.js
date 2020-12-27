const User = require('../models/user')

module.exports.home = function(req,res)
{
    return res.render('home', {
        title: "Home"
    });
}

module.exports.signup = function(req,res)
{
    if(req.isAuthenticated())
    {
        return res.redirect('/');
    }
    return res.render('sign-up', {
        title: "Sign Up"
    });
}

module.exports.signin = function(req,res)
{
    if(req.isAuthenticated())
    {
        return res.redirect('/');
    }   
    return res.render('sign-in', {
        title: "Sign In"
    });
}


module.exports.createUser = function(req, res)
{
    if (req.body.password != req.body.confirm_password){
        console.log("Password and Confirm Password Not Same")
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/sign-in');
            })
        }else{
            console.log('User Already Exists, Use Another Email');
            return res.redirect('back');
        }

    });
}

module.exports.emailexist = function(req,res){
    console.log(req.body);
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in check'); return}

        if (user){
            return res.send("Email Already In Use");

        }else{
            return res.send("Email Available");
        }

    });
}

module.exports.createSession = function(req, res)
{
    return res.redirect('/');
}

module.exports.destroySession = function(req, res)
{
    req.logout();
    return res.redirect('/');
}