const express = require('express');
const router = express.Router();
const homeController = require('../controller/controller-home');

router.get('/', homeController.home);
router.get('/sign-up', homeController.signup);
router.get('/sign-in', homeController.signin);


router.post('/create-user', homeController.createUser);
// for any further routes, access from here
// router.use('/routerName', require('./routerfile));


module.exports = router;