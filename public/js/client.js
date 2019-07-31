




const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
//listener for form input
weatherForm.addEventListener('submit',function(event){
    event.preventDefault();
    
    //search gives us the value entered by the user and value extracts this for us.
    const location = search.value;
    fetch('http://localhost:3000/weather?address='+location).then(function(response){
    response.json().then(function(data){
        console.log("The current temperature now is : "+data.temperature+" with a precipitation probability of : "+data.precipitation);
        console.log("Right now : "+data.current_forecast+". Later : "+data.hour_forecast+". Much later : "+data.forecast);
        });
    });
});