const express = require("express");
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/home', function(req, res){
    res.render('home_view');
 });
 app.get('/about', function(req, res){
    res.render('about_view');
 });
 app.get('/location', function(req, res){
    res.render('location_view');
 });
 app.get('/mission', function(req, res){
    res.render('mission_view');
 });
 app.get('/contact', function(req, res){
    res.render('contact_view');
 });


// http://localhost:3000
app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`);
  });