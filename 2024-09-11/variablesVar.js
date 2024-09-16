"use strict";
// varを使用した変数宣言
var varX = 1; // グローバルスコープ
if (true) {
    var varY = 2; // ブロックスコープ
}
function testVar() {
    var varZ = 3; // 関数スコープ
    varX = 10; // 再代入
    console.log(varX); // 10
    console.log(varY); // 2
    console.log(varZ); // 3
}
console.log(varX); // 1
console.log(varY); // 2
//console.log(varZ); // error: 関数スコープなので関数外からは参照できない
testVar();
