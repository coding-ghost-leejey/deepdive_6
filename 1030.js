// Morning Mission - 1. 나머지수 구하기

function getRest(num1, num2) {
  let result = num1 % num2;
  return result;
}

console.log(getRest(3, 2)); // 1
console.clear();
// mission 2 - for 반복문을 이용 - numbers에서 짝수만 출력하시오
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 1; i < numbers.length; i++) {
  if (!(numbers[i] % 2)) {
    console.log(numbers[i]);
  }
}

console.log(Boolean(0));
console.clear();

// mission 3 - 주어진 수이하의 짝수의 합을 구하시오.
// step 1 -> 주어진 수 이하의 짝수값만 출력
// step 2 -> 추출한 짝수값을 모두 더해서 최종 더한값을 출력
function getSumEven(number) {
  // for문 활용
  let total = 0;
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      // total = total + i
      total += i;
    }
  }

  return total;
}

console.log(getSumEven(10)); // 30
console.log(getSumEven(7)); // 12
