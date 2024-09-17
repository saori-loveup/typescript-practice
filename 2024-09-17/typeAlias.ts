export {};

// ユニオン型の型エイリアス
type StringOrNumber = string | number; // StringOrNumberという型を定義

let test: StringOrNumber = 123;
test = 123; // OK
test = "test"; //OK

// 関数型の型エイリアス
type CallbackFunction = (value: string) => boolean; // 引数のvalueの型がstring、戻り値の型がbooleanの関数型を定義
let CallbackFunction: CallbackFunction;
CallbackFunction = function (value) {
  return value.length > 5;
};

console.log(CallbackFunction("test")); // false
console.log(CallbackFunction("test abc")); // true
