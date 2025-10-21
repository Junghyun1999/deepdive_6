const a = 'hello'
const b = 3; //여기서 b의 데이터타입은 number
const c = a+b; //여기서 c의 데이터타입은 string
const d = "5";
//number + string => 문자열로 자동변환. 

console.log(b + d); // 문자열 + 넘버 => 문자열
console.log(b * d); // 문자열 * 넘버 => 넘버
console.log(a * b); // NaN -> Not a Number

let e; //const, let 변수 선언, 값을 지정하지 않았다.

/*
console.log(sum(3, 5));
console.log(remainer(5,3)); // const나 let로 불러낸 함수는 호이스팅이 일어나서 선언이 안된것 처럼 보임.
const remainer = function (a,b){
    return a % b
};
function sum(a,b) {
    return a+ b;
}
*/

console.log("e :", e); //underfined

const f = null; //반값
console.log("f :", f);

const fruits = ['banana', 'melon', 'watermelon']
//하나의 변수에 여러 값을 넣을 때는 []로 묶어야 함(= 배열) => 여러 데이터 넣기 가능
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); 