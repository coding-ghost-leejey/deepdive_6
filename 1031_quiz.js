const users = [149, 180, 192, 170]; // 키
const ghost = 167; // Ghost의 키

// ghost 보다 큰 user가 몇명인지 구하시오.

// "Ghost보다 키가 큰 사람은 총 3명입니다.""
// for..of, for, forEach
let count1 = 0;
for (const user of users) {
  if (user > ghost) {
    count1 = count1 + 1;
  }
}
console.log(`${ghost}보다 큰 User는 ${count1}명입니다.`);

let count2 = 0;
for (let i = 0; i < users.length; i++) {
  if (users[i] > ghost) {
    count2 += 1;
  }
}

console.log(`${ghost}보다 큰 User는 ${count2}명입니다.`);

let count3 = 0;
users.forEach((user) => {
  if (user > ghost) {
    // count3 = count3 + 1;
    count3++;
  }
});

console.log(`${ghost}보다 큰 User는 ${count3}명입니다.`);
