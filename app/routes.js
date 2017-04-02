// require express
var express = require('express');
var path    = require('path');

//create our router object
var router = express.Router();

//export our router
module.exports = router;

// route for our homepage
router.get('/', function(req, res) {
	res.render('pages/home.ejs');
});

// route for our readpage
router.get('/', function(req, res) {
	res.render('pages/read.ejs');
});

// route for our updatepage
router.get('/', function(req, res) {
	res.render('pages/update.ejs');
});

// route for our deletepage
router.get('/', function(req, res) {
	res.render('pages/delete.ejs');
});
