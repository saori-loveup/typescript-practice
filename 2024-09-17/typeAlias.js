"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let test = 123;
test = 123; // OK
test = "test"; //OK
let CallbackFunction = function (value) {
    return value.length > 5;
};
console.log(CallbackFunction("test")); // false
console.log(CallbackFunction("test abc")); // true
