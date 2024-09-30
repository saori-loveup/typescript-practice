"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TestPrivate_lastName;
Object.defineProperty(exports, "__esModule", { value: true });
// public
class TestPublic {
    // コンストラクター
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // メソッド
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
const david = new TestPublic("David", "King");
// 各メンバにアクセス可能
console.log(`${david.firstName} ${david.lastName}`); // David King
david.getFullName(); // David King
// private
class TestPrivate {
    // コンストラクターをprivateにするとnewできなくなる
    //private constructor(firstName: string, lastName: string) {
    constructor(firstName, lastName) {
        _TestPrivate_lastName.set(this, void 0); // #をつけることでもprivateになる
        this._firstName = firstName;
        __classPrivateFieldSet(this, _TestPrivate_lastName, lastName, "f");
    }
    // メソッド
    getFullName() {
        console.log(`${this._firstName} ${__classPrivateFieldGet(this, _TestPrivate_lastName, "f")}`);
    }
}
_TestPrivate_lastName = new WeakMap();
const kate = new TestPrivate("Kate", "Denson");
// 各メンバにアクセス不可
//console.log(`${kate._firstName} ${kate.#lastName}`);
//kate.getFullName(); // David King
