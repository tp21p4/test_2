const weather = document.querySelector(".js-weather");

const API_KEY = "3bfb4476e50691c3e226e788e22e43f3";
const COORDS = 'coords';

function getWeather(lat ,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
    .then(function(resonse){
        return resonse.json()
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}


function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    // console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);

}

function handleGeoErrors(){
    console.log('Cant access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoErrors);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    // console.log(loadedCords);
    if(loadedCords === null){
        askForCoords();
    }else{
        //getWeather
        const parsedWeather = JSON.parse(loadedCords);
        getWeather(parsedWeather.latitude, parsedWeather.longitude);
    }
}

function init(){
    loadCoords();
}


init();