const router = require('express').Router();
const dashRoutes = require('./dashboard-routes');
const homeRoutes = require('./homepage-routes');
const apiRoutes = require('./api');

router.use('/dashboard', dashRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;