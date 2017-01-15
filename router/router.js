/**
 * Created by gfbaiwff on 2017/1/14.
 */
var formidable = require("formidable");

exports.showIndex = function(req,res,next){
    res.render('index');
};

//×¢²áÒ³Ãæ
exports.showRegister = function(req,res,next){
    res.render('register');
};

//×¢²áÒµÎñ
exports.doRegister = function(req,res,next){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){

    });
};