const request = require('request');


const geocode = function(address,callback){
  var options = {
    //encodeURIcomponent(address) - accepts characters like '?'
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+ address +'&key=AIzaSyCkad5H3MQxwwSYXj5EncEHIsZTCvZP-fU'
  };

  request(options,function(error,response,body){
    data = JSON.parse(body);

    if(error){
      callback("Unable to connect");
    }
    else{
      callback(undefined,response,{
        location: data.results[0].formatted_address,
        latitude: data.results[0].geometry.location.lat,
        longitude: data.results[0].geometry.location.lng
      });
    }
  });
};

module.exports = geocode;
