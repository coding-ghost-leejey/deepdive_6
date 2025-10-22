// 06 - 사각형의 둘레를 구하는 함수를 만드세요(가로, 세로 입력받기)
function getRectPerimeter(h, v) {
  const perimeter = (h + v) * 2;
  return `가로 ${h}cm, 세로 ${v}cm인 사각형의 둘레는 ${perimeter}cm 입니다.`;
}

// 07 - 시험점수를 입력받아 60점 이상은 합격, 아니면 불합격 여부를 판단하는 함수를 만드세요
function checkPass(score) {
  const isPass = score >= 60 ? "합격" : "불합격";
  return `${score}점은 ${isPass} 입니다.`;
}

// 08 - 이벤트 참여가능여부를 판단하는 함수(20세 이상이며, 서울에 거주하는 사람대상 판별)
function canJoinEvent(age, addr) {
  const isAge = age >= 20;
  const isSeoul = addr === "서울";
  const isPass = isAge && isSeoul ? "가능" : "불가능";
  return `${age}세, ${addr}에 거주중인 당신은 "이벤트 참여가 ${isPass}" 합니다.`;
}

// 09 - 영화관람여부를 판단하는 함수를 만들어보세요
function canWatchMovie(age, withParent) {
  const canWatch = age >= 15 && withParent;
  const isPass = canWatch ? "관람가능" : "관람불가";
  return `나이 ${age}세, 보호자 동반${withParent}하신 당신은 ${isPass} 입니다.`;
}

// 10 - 요일을 입력받아, 주말여부를 판별하는 함수를 만들어보세요
function isWeekend(week) {
  const isWeekend = week === "토" || week === "일" ? "주말" : "평일";
  return `입력하신 ${week}요일은, ${isWeekend} 입니다.`;
}



const answers = [
  getRectPerimeter(20, 30),
  checkPass(70),
  canJoinEvent(25, "부산"),
  canWatchMovie(16, true),
  isWeekend("월"),
];

// answers.forEach((data, i) => console.log(`${i + 1}. ${data}`));

let i = 1;
for (const data of answers) {
  console.log(`${i++}. ${data}`);
}
