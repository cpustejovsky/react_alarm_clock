const express = require('express');
const alarm = require('../alarm/alarm')
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/alarm-weekday", (req, res)=>{
  alarm(5, 0, "AM");
  res.send("weekday alarm set")
})

router.get("/alarm-weekend", (req, res)=>{
  alarm(6, 30, "AM");
  res.send("weekend alarm set")
})

module.exports = router;