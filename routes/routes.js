
const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.get('/app*', controllers.getApp);
router.get('/reviews*', controllers.getReviews);
router.get('/downloadapp', controllers.downloadApp);
router.get('/reviews*', controllers.getReviews);
module.exports = router;
