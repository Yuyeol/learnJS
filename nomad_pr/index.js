/*변수설정 : let
 *상수설정 : const
 *이전엔 var만 썻음.
 * */
let a = 221;
var b = a - 5;
a = 4;
console.log(b, a); 

/* 배열 */
const Info = [1, 2, 3, 4];
console.log(Info);
/*
 * 배열 객체로
 */
const myInfo = {
	name : "YY", //여기서 변수 : 값이 되는거임 
	age : 28,
	gender : "Male",
	favMovie : ["Along the gods", "LOTR", "Oldboy"], //객체안에 배열넣음
	favFood : [{name : "Kimchi", fatty : false}, {name : "Cheese burger", fatty : true}]//오브젝트 안에 있는 favFood 배열안에 객체 둘을 넣은것
}
console.log(myInfo);//정보 다출력함
console.log(myInfo.gender);//젠더만 출력함
console.log(myInfo.favFood[0].name);

/*function
 * */
function sayHello(name, age) {//argument를 괄호 안에 넣음
	//console.log('Hello ' + name + " you have " + age + " years of age" );  //>>이것은 메소드 내에 출력 기능자체를 넣는거임
	return 'Hello ' + name + " you have " + age + " years of age"; //값을 리턴하게 했음
}

const greet = sayHello("YY", 28);//리턴 값 받아와서 변수에 초기화함
console.log(greet);


const calculator = {
	plus : function(a, b) {
		return a + b;
	}
}

const plus = calculator.plus(5, 5);
console.log(plus);



