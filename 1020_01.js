const a = 10;
const b = "10";
const c = true;
const d = 3;

console.log(typeof a); // number -> Data Type
console.log(typeof b); // string
console.log(typeof c); // boolean

// 산술연산자
console.log(a + d);
console.log(a * d);
console.log(a / d);
console.log(a - d);
console.log(a % d); // 나머지연산자

// 비교연산자 - boolean값을 반환한다.
console.log(a == b); // true -> 값만비교/데이터타입은 비교하지 않는다.
console.log(a != b); //같지않다.값만비교

console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);

console.log(a === b); // false -> 값과 데이터타입을 모두 비교
console.log(a !== b); // 같지않다. 데이터타입까지 비교

// 논리연산자
