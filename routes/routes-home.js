const express = require('express');
const router = express.Router();
const homeController = require('../controller/controller-home');
const passport = require('passport')

router.get('/', homeController.home);
router.get('/sign-up', homeController.signup);
router.get('/sign-in', homeController.signin);


router.post('/create-user', homeController.createUser);

router.post('/create-session', passport.authenticate('local', {failureRedirect: '/sign-in'} ),homeController.createSession);
// for any further routes, access from here
// router.use('/routerName', require('./routerfile));
router.get('/sign-out', homeController.destroySession)

router.post('/sign-up/emailexist',homeController.emailexist);

module.exports = router;