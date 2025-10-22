const a = "hello";
const b = 3;

const c = a + b; // c의 데이터 타입은 뭘까요? 문자열 + 넘버 ===> 문자열 자동형변환
const d = "5";

console.log(b + d); // 문자열 + 넘버 -> 문자열
console.log(b * d); // 문자열 * 넘버 -> 넘버
console.log(a * b); // NaN -> Not a Number

let e; // const, let 변수 선언, 값을 지정하지 않았다.
console.log("e :", e); // undefined

const f = null; // 빈값
console.log("f :", f);

const fruits = ["banana", "melon", "watermelon"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
