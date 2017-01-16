/**
 * Created by gfbaiwff on 2017/1/14.
 */
var express = require('express');
var app = express();
var router = require('./router/router.js');
var session = require("express-session");

app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true
}));

app.set('view engine','ejs');
app.use(express.static('./public'));

app.get("/",router.showIndex);
app.get("/register",router.showRegister);
app.post("/doregister",router.doRegister);
app.get("/login",router.showLogin);
app.get("/doLogin",router.doLogin);

app.listen(3000);