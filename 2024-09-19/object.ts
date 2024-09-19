export {};

const obj = {
  key1: "value1",
  key2: "value2"
};
// ドット記法
console.log(obj.key1); // "value1"
// ブラケット記法
console.log(obj["key2"]); // "value2"

const obj2 = {
  key: "value",
  123: "value123",
  "test-key": "test-value",
  blue: "#002266",
  red: "#cc0000"
};
const color = "red";

console.log(obj2["123"]); // "value123"
console.log(obj2["test-key"]); // "test-value"
console.log(obj2[color]); // "#cc0000"

// 型注釈:typeを使用
type Box = {
  name: string;
  width: number;
  height: number;
};
let box: Box;
box = {
  name: "hako",
  width: 150,
  height: 150
};

// オブジェクトリテラルに直接型注釈
let person: {
  name: string;
  age: number;
};
person = {
  name: "山田太郎",
  age: 25
};

// キーが動的な場合や、固定されていない時の型注釈
const persons: { [key: string]: number } = {
  taro: 25,
  hanako: 18,
  ichiro: 30
};
