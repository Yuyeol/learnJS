//const title = document.getElementById("title");//html에 있는 id=title을 가져오는거
const title = document.querySelector("#title");//위와 같은 기능을 한다.

title.innerHTML = "Hi! From JS";//title의 H1에 있는 텍스트를 요것으로 교체했음.
title.style.color = 'yellow';
document.title = 'I own you now'//페이지 제목을 바꿔봤다.
console.log(title);

