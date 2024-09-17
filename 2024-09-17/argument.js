"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// オプショナル引数
function hello(name, title) {
    // オプショナル引数は必須引数の後に配置
    if (title) {
        console.log(`Hello, ${name} ${title}!`);
    }
    else {
        console.log(`Hello, ${name}!`);
    }
}
hello("山田太郎"); // "Hello, 山田太郎!"
hello("山田太郎", "さん"); // "Hello, 山田太郎 さん!"
// デフォルト値を設定した引数のある関数
function greet(name, title = "さん") {
    console.log(`Hello, ${name} ${title}!`);
}
greet("山田太郎"); // "Hello, 山田太郎 さん!"
greet("山田太郎", "様"); // "Hello, 山田太郎 様!"
// 可変長引数
function sum(...numbers) {
    return numbers.reduce(function (total, num) {
        return total + num;
    });
}
console.log(sum(1, 2, 3)); // 6
const numbers = [1, 2, 3];
console.log(sum(numbers)); // error: Argument of type 'number[]' is not assignable to parameter of type 'number'.
console.log(sum(...numbers));
