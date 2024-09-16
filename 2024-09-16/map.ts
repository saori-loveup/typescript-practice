export {};

// newでMapオブジェクトのインスタンスを作成・初期化
const map = new Map();
console.log(map.size); // 0

const map2 = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
console.log(map2.size); // 2

// 要素の追加
map.set("key1", "value1");
console.log(map.size); // 1
console.log(map.get("key1")); // value1
// 要素の値変更
map.set("key1", "値1");
console.log(map.size); // 1
console.log(map.get("key1")); // value1
