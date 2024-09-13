"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 変数の型注釈
var age = 20;
var gender = "female";
// age = "30"; // error: Type 'string' is not assignable to type 'number'.
// 関数の型注釈
function test(a, b) {
    return a + b;
}
console.log(test(1, 2)); // 引数で渡し型が一致しているので問題なし
//console.log(test(1, "2")); // error: Argument of type 'string' is not assignable to parameter of type 'number'.
/* 戻り値が指定の型と異なるエラーの関数
function test2(a: number): number {
  return a + ""; // error: Type 'string' is not assignable to type 'number'.
}
*/
