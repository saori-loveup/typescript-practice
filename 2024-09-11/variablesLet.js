// letを使用した変数宣言
var letX = 1; // グローバルスコープ
if (true) {
    var letY = 2; // ブロックスコープ
}
function testlet() {
    var letZ; // 関数スコープ、初期値なし
    letX = 10; // 再代入
    console.log(letX); // 10（グローバルスコープなので参照できる）
    //console.log(letY); // error: 別ブロックで定義された変数は参照できない
    console.log(letZ); // undefined
    // let letZ = 3; // error: 同スコープ内での再宣言不可
    letZ = 3;
    console.log(letZ); // 3
}
console.log(letX); // 1
//console.log(letY); // error: ブロックスコープなので参照できない
//console.log(letZ); // error: 関数スコープなので関数外からは参照できない
testlet();
