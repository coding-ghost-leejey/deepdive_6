// 1. 두 수의 차이 구하기
// 설명 : 예를들어 5, 10 입력시 '5' 출력, 10, 3 입력시 '7' 출력
// 주의 : 음수값이 아닌 두 수의 차이만 구하시오.
// Math.abs() 를 알아보고 이용하여 문제를 풀어주세요

function getAbsoluteDifference(num1, num2) {
  const diff = Math.abs(num1 - num2);
  console.log(diff);
  return diff;
}

// 예시
getAbsoluteDifference(5, 10); // 5
getAbsoluteDifference(10, 3); // 7

// 2. 나이 구하기
// 설명 : 태어난 연도를 입력받아 그 사람의 현재 (만)나이를 반환하는 함수를 만드세요
// 주의 : 현재 연도인 2025를 직접입력하거나 new Date().getFullYear() 를 공부하여 사용하세요.

getAge(2001); // 24세

// 3. 몫 구하기
// 설명 : 두 수를 입력받아 나눈 값의 몫만 반환하세요
// 주의 : 나머지는 버립니다. Math.floor() 를 알아보고 이용하여 문제를 풀어주세요

// 4. 배열의 평균값 구하기
// 설명 : 주어진 배열안의 원소들의 평균값을 구하여 반환하는 함수를 만드세요
// 주의 : reduce()를 공부하거나, for문으로 작성하세요(둘중 어떤것을해도 무방)
// 예시
// getAverage(numbers) 를 호출했을경우, 평균값은 6 이 된다. 평균 = 총합 / 배열원소개수

const numbers = [3, 5, 10, 2, 6, 7, 9];
getAverage(numbers); // 6
