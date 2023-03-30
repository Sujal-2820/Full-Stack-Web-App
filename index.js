const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const passport = require("passport");
const session = require('express-session');
require("./authentication");




const app = express();
app.use(session({ secret: 'my-secret-key' }));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.use(passport.initialize());


app.get("/Donate", passport.authenticate('google', { scope: ['email','profile'] }));

app.get("/google/callback", passport.authenticate('google', { failureRedirect: '/' }), (req, res)=>{
    res.render("Donate");
});




  

app.get("/", function(req,res){
    res.render("index");
});

app.get("/Donate", function(req,res){
    res.render("Donate");
});

app.get("/Payment", function(req,res){
    res.render("Payment");
})


app.get("/About", function(req,res){
    res.render("About");
});

app.get("/Clothes", function(req,res){
    res.render("Clothes");
});


app.get("/Food", function(req,res){
    res.render("Food");
});

app.get("/Funds", function(req,res){
    res.render("Funds");
});



app.listen(3000, function() {
    console.log("Server started on port 3000");
  });