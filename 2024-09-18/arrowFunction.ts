export {};

// 通常の関数
const testFunc1 = function (num1: number, num2: number): number {
  return num1 + num2;
};
// アロー関数で書いた時
const arrowFunc1 = (num1: number, num2: number): number => {
  return num1 + num2;
};
console.log(testFunc1(1, 2)); // 3
console.log(arrowFunc1(1, 2)); // 3

// 通常の関数
const testFunc2 = function (num1: number): number {
  return num1 + 1;
};
// アロー関数で書いた時
const arrowFunc2 = (num1: number) => num1 + 1;
console.log(testFunc2(1)); // 2
console.log(arrowFunc2(1)); // 2
