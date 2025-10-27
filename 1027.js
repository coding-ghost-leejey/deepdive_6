// 두 수의 합을 반환하는 sum 함수를 만드세요.

function sum(a, b) {
  const result = a + b;
  return result;
}

console.log(sum(3, 5)); // 8
console.log(sum(7, 10)); // 17

const a = Number("5");
console.log(typeof a, a); // number

const b = String(3);
console.log(typeof b, b); // string

const c = Boolean(a+b);
console.log(typeof c, c);
