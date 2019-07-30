const request = require('request');


const weather = function(latitude,longitude,callback){
  var options = {
    url: 'https://api.darksky.net/forecast/b27257f442ccf5cce3a6044fd2912845/'+latitude+','+longitude
  };
  request(options, function(error,response,body){
    data = JSON.parse(body);
    //you can give current status and the status for next hour
    //data.currently.summary with data.currently.temperature and data.currently.precipProbability
    //data.minutely.summary and data.hourly.summary

    if(error){
      callback("Unable to connect");
    }
    else{
      callback(undefined,response,{
        currtemp: data.currently.temperature,
        precipitation: data.currently.precipProbability,
        curr_forecast: data.currently.summary,
        hour_forecast: data.minutely.summary,
        forecast: data.hourly.summary
      });
    }
  });
};

module.exports = weather;
