const users = ["irangi", "camel", "ghost", "sunny", "henry"];
let userIndex = 7;
// morning mission 01 - 서수로 3번째 있는 user 이름을 찍으시오 -> "3번째 user는 ghost님 입니다."
// forEach() 배열메서를 사용하세요.

users.forEach(function (user, idx) {
  if (idx === 2) {
    console.log(`${idx + 1}번째 user는 ${user}입니다.`);
  }
});

// morning mission 02 - userIndex 번째 user 이름찍기
users.forEach((user, idx) => {
  if (idx === userIndex - 1) {
    console.log(`${userIndex}번째 user는 ${user}입니다.`);
  } 
});
