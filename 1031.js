// 함수선언식, 함수표현식

sum(3, 5);

// 1. sum() 함수(두수의합을 반환)를 함수 선언식으로 만드시오.
function sum(num1, num2) {
  let result = num1 + num2;
  console.log(`sum : ${result}`);
  return result;
}
// 2. div() 함수(두수의 나눈값의 몫을 반환, 소숫점이하 버림)를 함수 표현식으로 만드세요( function 사용 )
const div = function (num1, num2) {
  let result = Math.floor(num1 / num2);
  console.log(`div : ${result}`);
  return result;
};

// 3. remainer() 함수(두수의 나눈값의 나머지값을 반환)를 함수 표현식으로 만드세요 ( arrow function 사용 )
const remainer = (num1, num2) => {
  let result = num1 % num2;
  console.log(`remainer : ${result}`);
  return result;
};

div(10, 3);
remainer(10, 3);
