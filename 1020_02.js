// 노드몬을 껐다가(ctrl + c), 재실행 nodemon 1020_02.js

const a = 13;
const b = 5;

const sum = a + b; /* a와 b의 더한값 */
const isEven = a % 2; /* a 값이 짝수인지 , 짝수라면 true, 홀수라면 false */

console.log(sum);
console.log(isEven);

// sum이라는 함수를 만드는데, x,y 두값을 더해서, 그 결과값을 리턴하는 함수

function calcSum(x, y) {
  const result = x + y;
  console.log(result); // return result
}

calcSum(3, 5);
calcSum(a, b);
calcSum(10, 15);

// 아이스크림만들기 함수, 다 만들면 13 입력하기
function createIcecream(syrup, topping) {
  const result = `${syrup} ${topping} 아이스크림이 만들어 졌습니다.`;
  console.log(result); // return result;
}

createIcecream("choco", "amond"); // 초코 아몬드 아이스크림이 만들어졌습니다.
createIcecream("vanila", "pinnut"); // 바닐라 피넛 아이스크림이 만들어졌습니다.
