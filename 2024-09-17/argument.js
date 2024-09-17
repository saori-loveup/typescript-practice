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
