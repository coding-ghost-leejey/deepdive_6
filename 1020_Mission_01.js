// 01 - 사각형의 너비를 구하는 함수를 만드세요(가로, 세로 길이 입력받기)
function getRectArea(h, v) {
  const rectSize = h * v;
  return `사각형의 크기는 ${rectSize} 입니다`;
}

// 02 - 학생의 성적표를 받아서, 평균을 구하는 함수를 만드세요.(국어,영어,수학)
function getAverage(a, b, c) {
  const average = (a + b + c) / 3;
  return `당신의 평균점수는 ${average}점 입니다`;
}

// 03 - 반지름을 입력받아 원의 넓이를 구하는 함수를 만드세요
// 원의넓이 === 반지름*반지름*원주율
function getCircleArea(radius) {
  const area = Math.PI * Math.pow(radius, 2);
  return `원의 넓이는 ${area} 입니다`;
}

// 03 - 2번째 방법
function getCircleArea2(radius) {
  const area = 3.141592653589793 * radius ** 2;
  return `원의 넓이는 ${area} 입니다`;
}

// 03 - 3번째 방법
function getCircleArea3(radius) {
  const area = 3.141592653589793 * radius ** radius;
  return `원의 넓이는 ${area} 입니다`;
}

// 04 - 원래가격과 할인율을 입력하면, 최종 판매가격을 구하는 함수를 만드세요
function calcDiscount(price, discount) {
  const discountPrice = price * (discount / 100);
  const finalPrice = price - discountPrice;
  return `원래가격 ${price}에서 ${discount}% 할인되어, 최종가격은 ${finalPrice}원 입니다.`;
}

// 05 - 두수를 입력받아, 나눈 나머지값을 구하는 함수를 만드세요
function getRemainer(x, y) {
  const remainer = x % y;
  return `${x}를 ${y}로 나눈  나머지는 ${remainer} 입니다.`;
}

const answers = [
  getRectArea(20, 30),
  getAverage(100, 50, 70),
  getCircleArea(25),
  calcDiscount(50000, 25),
  getRemainer(5, 3),
];

let i = 1;
for (const data of answers) {
  console.log(`${i++}. ${data}`);
}
