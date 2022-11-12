const express = require('express');
const router = express.Router();
const weather_routes = require('./apiv1/weatherRoutes');

router.get('/apiv1/weather', weather_routes.specificLocation)
router.get('/apiv1/weather1', weather_routes.bulkFetch)
router.get('/apiv1/nextTenDays', weather_routes.nextTenDays)


module.exports = router;

