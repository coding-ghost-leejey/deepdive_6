// 모닝미션 아래문제를 푸시고, 결과를 캡쳐후 Good-morning 인사하기.

const numbers = [3, 17, 21, 30, 9, 15, 25, 1, 15, 30, 20];
let result = 0; // 값을 할당
// 연습문제 : numbers의 모든 수를 찍어보시오. (for문을 이용해서)
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// length 길이구하기
// 미션 : for문을 이용해서, numbers의 원소의 합을 구하시오.
// for문 작성하는 곳
for (let i = 0; i < numbers.length; i++) {
  result = result + numbers[i]; // 재할당
}

console.log(`${numbers}의 총 합은 ${result} 입니다.`);
// 미션결과 콘솔 캡쳐하기

const str = "Hello World";
console.log(str.length);


