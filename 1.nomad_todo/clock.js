const clockContainer = document.querySelector(".js-clock"); //js-clock 클래스 찾음
const clockTitle = clockContainer.querySelector("h1"); //js-clock의 h1을 찾음

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${
        seconds < 10 ? `0${seconds}` : seconds
    }`; //삼항연산자 10보다 작으면 0을 붙이고 10보다 크면 그냥 seconds
    
}

function init() {
    //getTime();
    //setInterval(실행할함수, 시간ms)
    setInterval(getTime, 1000);
}

init();