const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const geocode = require('./geocode.js');
const weather = require('./weather.js');


const staticFilePath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');
//app.use is used to serve up static files such as html.

//to serve dynamic webpages - handlebar engine.
app.set('view engine', 'hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

//to serve static pages
app.use(express.static(staticFilePath));


app.get('/',function(req,res){
    //to render our views.
    res.render('index',{
        name: "Vijay",
        title: 'Weather App'
    });

});

app.get('/weather',function(req,res){
    if(!req.query.address){
        res.send({
            error: "Enter the address"
        });
    }
    geocode(req.query.address,function(error,response,body){
        weather(body.latitude,body.longitude,function(error,response,body){
            res.send({
                address: req.query.address,
                temperature: body.currtemp,
                precipitation: body.precipitation,
                current_forecast: body.curr_forecast,
                hour_forecast: body.hour_forecast,
                forecast: body.curr_forecast,
            });
        });
    });
});

app.get('*',function(req,res){
    res.render('404',{
        title: '404',
        errormsg: "Page Not found"
    });
});


app.listen(3000,function(){
    console.log("Server up on port 3000");
});