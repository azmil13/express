const router = require('express').Router();
const routeFrontoffice = require('./frontoffice');
const routeRkelas1 = require('./rkelas1');
const routeRkelas2 = require('./rkelas2');
const routeRarsip = require('./rarsip');
const routeKolidordapur = require('./kolidordapur');
const routeTu = require('./tu');


router.use('/frontoffice', routeFrontoffice);
router.use('/rkelas1', routeRkelas1);
router.use('/rkelas2', routeRkelas2);
router.use('/rarsip', routeRarsip);
router.use('/kolidordapur', routeKolidordapur);
router.use('/tu', routeTu);


module.exports = router;