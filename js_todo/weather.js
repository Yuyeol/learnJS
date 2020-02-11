const weather = document.querySelector(".js-weather");

const API_KEY = "bdf815344905c688cf21cc4c5f509ed9";//https://home.openweathermap.org/api여기서 API keys에서 복사해옴
//>>이거 내 appid임
const COORDS = 'coords';

function getWheather(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
    //then : 데이터가 완전히 들어온다음 함수를 호출함 >>여기서는 fetch가 완료되고 호출하려고
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    //위도와 경도 가져옴
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,//value와 key 값을 다르게 주고싶으면 latitude : a 이런식으로 하면됨
        longitude
    };
    saveCoords(coordsObj);
    getWheather(latitude, longitude);
}

function handleGeoError(){
    console.log('Cant access geo location');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        console.log(parsedCoords);
        getWheather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();