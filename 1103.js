// 공배수 구하기

function getNumber(num, x) {
  let result = num % x === 0 ? "공배수" : "공배수아님";
  console.log(result);

  return result;
}

getNumber(60, 3); // '공배수'
// 뒤에있는 x가 앞에있는 num의 공배수이면 '공배수'출력, 아니면 '공배수아님'출력
getNumber(60, 7); // '공배수아님'