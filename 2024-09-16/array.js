"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
// * 配列の型注釈
var array1 = [1, 2, 3];
var array2 = [1, 2, 3];
console.log(array1, array2);
// * 配列は値が同じでも比較できない
console.log(array1 == array2); // false
// * 配列の要素を取り出したときのデータ型
//   numberの配列の値もnumberなのでstringに入れられない
//let test: string = array1[0]; // error: Type 'number' is not assignable to type 'string'.
// * ユニオン型
var mixedArray = ["one", 2, "三"];
// * 配列のループ
for (var i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}
for (var _i = 0, array2_1 = array2; _i < array2_1.length; _i++) {
    var number = array2_1[_i];
    console.log(number);
}
// * スプレッド構文
console.log(array1); // [ 1, 2, 3 ]
console.log.apply(// [ 1, 2, 3 ]
console, array1); // 1 2 3
// ** 配列のコピー
var array3 = __spreadArray([], array1, true); // 配列の値を展開してコピー
array3.push(4);
console.log(array1, array3); // [ 1, 2, 3 ] [ 1, 2, 3, 4 ]（array1の中身は変わらない）
var array4 = array1; // 配列そのものをコピー
array4.push(4);
console.log(array1, array4); // [1, 2, 3, 4][(1, 2, 3, 4)]（array1の中身も変わってしまう）
var array5 = __spreadArray(__spreadArray([0], array3, true), [5], false);
console.log(array5);
