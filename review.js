const houseworks = [
  "세탁기돌리기",
  "방청소하기",
  "옷정리하기",
  "설거지하기",
  "환기시키기",
];
for (let i = 5; i > -1; i--) {
  let print = `${houseworks[i]},${i + 1}번`;
  console.log(print);
}
