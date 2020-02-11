const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;//btn의 부모가 li니까 const li임
    toDoList.removeChild(li);//html 상의 x누른 내용은 일단 지워짐
    const cleanToDos = toDos.filter(function(toDo) {//filterEn에서 true인 값들만 모아 배열로 만들어줌
        return toDo.id !== parseInt(li.id);
    });//filter 거치면 cleanToDos에는 toDo.id와 li.id 중 일치하지 않는 것만 리턴함
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    //toDos는 오브젝트라 로컬스토리지에 value로 그대로 안뜸. 그래서 String으로 바꾼거.
}

function paintToDo(text) {
    const li = document.createElement("li");//값 들어올때마다 리스트 노출시킬거니까
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1; //toDos에 길이 1을 추가해주면 id가 1부터 사직하지.
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);//X버튼 클릭에 이벤트 줌
    span.innerText = " "+text;//span에다가 value 넣고
    li.appendChild(delBtn);//li에 버튼 집어넣음
    li.appendChild(span);//li에 span 집어넣음
    li.id = newId;//li에도 id를 설정해두는겨
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);//toDos배열에 toDoObj(id랑 txt들어있음)를 넣어줌
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;//입력값을 가져옴
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        })//null인 경우엔 아무것도 안하기때문에 else가 없음.
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();