// constを使用した変数宣言
const constX = 1; // グローバルスコープ

if (true) {
  const constY = 2; // ブロックスコープ
}

function testconst() {
  //const constZ; // error: 初期値の設定が必要
  const constZ = 3; // ブロックスコープ

  //constX = 10; // error: 再代入不可
  console.log(constX); // 1（グローバルスコープなので参照できる）
  //console.log(constY); // error: 別ブロックで定義された変数は参照できない
  console.log(constZ); // 3

  //const constZ = 3; // error: 再宣言不可
}

console.log(constX); // 1
//console.log(constY); // error: ブロックスコープなので参照できない
//console.log(constZ); // error: 関数スコープなので関数外からは参照できない
testconst();
