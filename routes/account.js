var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var agendaTable = db.get('agenda');
  agendaTable.find({},{},function(errors,agendas){
    var data = {agendas: agendas};
    res.render('account/index')
  });
});

module.exports = router;
