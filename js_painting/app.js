const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");//2d방식으로 선긋게 컨트롤 해줌
const colors = document.getElementsByClassName("jsColor")
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITAL_COLOR = "#2c2c2c"
const CANVAS_SIZE = 400;

//캔버스는 css에서 만들었는데 선이 그려지려면
//자바스크립트에서도 픽셀사이즈 설정을 똑같이 해줘야지 그림
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = "INITAL_COLOR"; //그릴 선의 색 설정
ctx.fillStyle = "INITAL_COLOR"
ctx.lineWidth = 2.5; //선의 굵기(px) 기본값 설정

let painting = false;
let filling = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    //캔버스내 좌표가 필요해서 설정해준거.
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {//클릭안하고 움직일때 : path만 찍음
        ctx.beginPath();//커서가 있는곳을 시작점으로 만듦
        //ctx.moveTo(x, y);//클릭이 떼이지면 x, y 좌표로 이동함 근데 beginPath있으니까 필요없더라
    } else {//클릭 하고 움직일때 : stroke 함
        ctx.lineTo(x, y);
        ctx.stroke();//획을긋는 기능. 이게 있어야 그림이 그려짐
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function  handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick(event) {
    if(filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}

function handleCanvasClick() {
    if(filling) {
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}

function handleCM(event) {
    event.preventDefault();
}

function handleSaveClick(event) {
    const image = canvas.toDataURL();//파라미터에 default는 image/png임
    const link = document.createElement("a");//a태그 만듦
    link.href = image;
    link.download = "Paint";//download라는 속성에 Paint라는 이름 추가함
    //a태그의 daownload는 link가 가리키는 파일을 다운로드하게함.
    link.click();
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);//누름
    canvas.addEventListener("mouseup", stopPainting);//뗌
    canvas.addEventListener("mouseleave", stopPainting);//캔버스이탈
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM)
}

Array.from(colors).forEach(
    color => color.addEventListener("click", handleColorClick)
);
//colors에 있는 요소들을 해당  color를 클릭할때마다 뽑아줌

if(range) {
    range.addEventListener("input", handleRangeChange);
}

if(mode) {
    mode.addEventListener("click", handleModeClick);
}

if(saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}