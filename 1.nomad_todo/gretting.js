const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN ="showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();//기본값이 제출시 새로고침인데, 다른행위 하게 하려고 기본값 예방
    const currentValue = input.value;//인풋에 입력한 값을 가져옴
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text) {//아규먼트에 인풋 입력값이 들어가지.
    form.classList.remove(SHOWING_CN)//텍스트 색칠하려면 폼을 숨겨야 하므로 
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;//hello + 인풋값 으로 나옴
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);//로컬스토리지에서 USER_LS가져온다
    if(currentUser === null) {
        //유저없음
        askForName();
    } else {
        //유저있음
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();