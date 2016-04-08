var express = require('express');
var db=require('../config/db');
var controller=require('../controller/persona_controller');
var router = express.Router();


db.startdb();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/apinode/persona',controller.getallPersona);
router.get('/apinode/persona/:id',controller.getbyidPersona);
router.post('/apinode/persona/',controller.postPersona);
router.put('/apinode/persona/:id',controller.putPersona);
router.delete('/apinode/persona/:id',controller.deletePersona);

module.exports = router;
