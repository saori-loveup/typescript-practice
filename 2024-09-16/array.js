"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// * 配列の型注釈
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
console.log(array1, array2);
// * 配列は値が同じでも比較できない
console.log(array1 == array2); // false
// * 配列の要素を取り出したときのデータ型
//   numberの配列の値もnumberなのでstringに入れられない
//let test: string = array1[0]; // error: Type 'number' is not assignable to type 'string'.
// * ユニオン型
let mixedArray = ["one", 2, "三"];
// * 配列のループ
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}
for (const number of array2) {
    console.log(number);
}
// * スプレッド構文
console.log(array1); // [ 1, 2, 3 ]
console.log(...array1); // 1 2 3
// ** 配列のコピー
let array3 = [...array1]; // 配列の値を展開してコピー
array3.push(4);
console.log(array1, array3); // [ 1, 2, 3 ] [ 1, 2, 3, 4 ]（array1の中身は変わらない）
let array4 = array1; // 配列そのものをコピー
array4.push(4);
console.log(array1, array4); // [1, 2, 3, 4][(1, 2, 3, 4)]（array1の中身も変わってしまう）
let array5 = [0, ...array3, 5];
console.log(array5); // [ 0, 1, 2, 3, 4, 5 ]
