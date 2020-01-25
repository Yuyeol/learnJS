const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(!hasClass) {
    //     title.classList.add(CLICKED_CLASS);
    // } else {
    //     title.classList.remove(CLICKED_CLASS);
    // } 요것을 토글을 이용하여 요약해보자
    title.classList.toggle(CLICKED_CLASS)
}

function init() {
    title.addEventListener("click", handleClick);
                             //click, mouseenter, resize 등등 다양한 이벤트로 설정가능
}                          
init();
 