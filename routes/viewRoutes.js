const express = require('express');
const viewController = require('../controller/viewController');

const router = express.Router();

router
    .get('/', viewController.getIndex)
    .get('/blog', viewController.getBlog)
    .get('/blogContent', viewController.getBlogContent);
    

module.exports = router;
