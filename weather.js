window.addEventListener('load', ()=> {
let long;
let lat;
let temperatureDescription = document.querySelector(".temperature-description")
let temperatureDegree = document.querySelector(".temperature-degree")
let locationTimezone = document.querySelector(".location-timezone")

if(navigator.geolocation){
   navigator.geolocation.getCurrentPosition(position => {
  long=position.coords.longitude;
  lat=position.coords.latitude;

  const card = document.querySelector('.card__inner');
  card.addEventListener('click', function () {
    card.classList.toggle('is-flipped')
  })

//   const proxy = 'https://cors-anywhere.herokuapp.com/'
//   const api1 = `${proxy}api.openweathermap.org/data/2.5/weather?lat={lat}&lon={long}&appid={6614fd87ac9c0fd145503163e79a07d3}`
  // const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?unitGroup=metric&key=55QRMYCTXQBWDKR8Q4KCD5P6G&contentType=json`;
  
  // fetch(api)
  //  .then(response =>{
  //      return response.json();
  //  })
  //  .then(data=> {
  //      console.log(data);
  //      const {conditions} = data.currentConditions;
  //      //Set DOM elements from the API
  //    console.log(conditions)

  //  });
  
   
// fetch(api1)
//    .then(response =>{
//        return response.json();
//    })
//    .then(data=> {
//        console.log(data);
       

//    });
  });
 }
});