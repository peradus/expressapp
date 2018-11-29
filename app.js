var path=require('path');
var express=require("express");
var app=express();

//=============
// APP SETTINGS
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'./views'));

//=============
// MIDDLEWARE

//=============
// ROUTES
app.get('/', function(req,res){
    res.render('index');
});

//=============
// APP-BEGIN
app.listen(3000, function(){
    console.log("ready on port 3000");
});