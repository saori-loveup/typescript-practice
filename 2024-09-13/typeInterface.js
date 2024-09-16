"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 20; // 型推論で変数"age"はNumberとして認識される
//age = "30"; // error: Type 'string' is not assignable to type 'number'.
age = 30; // 代入する値がNumberなのでOK
let gender; // 初期値が設定されていない場合、any型と推論される
gender = "female"; // OK
gender = 1; // OK
function test(a, b) {
    return a + b; // 戻り値の型はnumberと推論される
}
