/**
 * Created by gfbaiwff on 2017/1/14.
 */
var express = require('express');
var app = express();

var router = require('./router/router.js');

app.set('view engine','ejs');
app.use(express.static('./public'));

app.get("/",router.showIndex);
app.get("/register",router.showRegister);
app.get("/doregister",router.doRegister);
//app.get("/",router.showIndex());

app.listen(3000);