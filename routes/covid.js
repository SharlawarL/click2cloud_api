const data = require('./state_district_wise.json');

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    
    //return responce of total covid data
    res.send(data);
});

module.exports = router;
