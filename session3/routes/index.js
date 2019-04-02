var express = require('express');
var router = express.Router();
var web13 = require('../json/web13.json');
var web14 = require('../json/web14.json');
var web15 = require('../json/web15.json');
var web16 = require('../json/web16.json');
var web17 = require('../json/web17.json');
var web18 = require('../json/web18.json');
var web19 = require('../json/web19.json');
var web20 = require('../json/web20.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/web13', function(req, res, next) {
  var datatoEJS = {
    web13: web13
  }
  res.render('web13', datatoEJS );
});

router.get('/web14', function(req, res, next) {
  var datatoEJS = {
    web14: web14
  }
  res.render('web14', datatoEJS );
});

router.get('/web15', function(req, res, next) {
  var datatoEJS = {
    web15: web15
  }
  res.render('web15', datatoEJS );
});

router.get('/web16', function(req, res, next) {
  var datatoEJS = {
    web16: web16
  }
  res.render('web16', datatoEJS );
});

router.get('/web17', function(req, res, next) {
  var datatoEJS = {
    web17: web17
  }
  res.render('web17', datatoEJS );
});

router.get('/web18', function(req, res, next) {
  var datatoEJS = {
    web18: web18
  }
  res.render('web18', datatoEJS );
});

router.get('/web19', function(req, res, next) {
  var datatoEJS = {
    web19: web19
  }
  res.render('web19', datatoEJS );
});

router.get('/web20', function(req, res, next) {
  var datatoEJS = {
    web13: web13
  }
  res.render('web20', datatoEJS );
});


module.exports = router;
