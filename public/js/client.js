
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
const messageThree = document.querySelector('#message-3');
//listener for form input
weatherForm.addEventListener('submit',function(event){
    event.preventDefault();
    
    //search gives us the value entered by the user and value extracts this for us.
    const location = search.value;

    messageOne.textContent = "Loading";
    messageTwo.textContent = "";
    messageThree.textContent = "";

    fetch('http://localhost:3000/weather?address='+location).then(function(response){
    response.json().then(function(data){
        messageOne.textContent = data.address;
        messageTwo.textContent = "The current temperature now is : "+data.temperature+"F with a precipitation probability of : "+data.precipitation;
        messageThree.textContent = "Right now: "+data.current_forecast+ ". Later: "+data.hour_forecast+". Much later: "+data.forecast;
        });
    });
});