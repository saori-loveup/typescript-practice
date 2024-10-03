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
var _TestAccess_instances, _TestAccess_testPrivate2, _TestAccess_readTest4;
Object.defineProperty(exports, "__esModule", { value: true });
// 親クラスを定義
class Character {
    constructor(name, perk1, perk2, perk3) {
        this.name = name;
        this.perk1 = perk1;
        this.perk2 = perk2;
        this.perk3 = perk3;
        this.speed = 4.0;
    }
    introduce() {
        console.log(`キャラクター名：${this.name}／固有パーク：${this.perk1}、${this.perk2}、${this.perk3}／足の速さ：${this.speed}m/s`);
    }
}
// Characterを継承した子クラスを定義
class Killer extends Character {
    setSpeed(speed) {
        this.speed = speed;
    }
}
// 親クラスのインスタンス化
const dwight = new Character("ドワイト・フェアフィールド", "絆", "有能の証明", "リーダー");
dwight.introduce(); // "キャラクター名：ドワイト・フェアフィールド／固有パーク：絆、有能の証明、リーダー／足の速さ：4m/s"
// 子クラスのインスタンス化
// 親クラスのコンストラクタで設定された引数を渡す必要がある
//const trapper = new Killer(); // error: Expected 4 arguments, but got 0.
const trapper = new Killer("不安の元凶", "野蛮な力", "興奮", "トラバサミ");
trapper.setSpeed(4.6);
trapper.introduce(); // "キャラクター名：不安の元凶／固有パーク：野蛮な力、興奮、トラバサミ／足の速さ：4.6m/s"
// アクセス修飾子のテスト
class TestAccess {
    constructor() {
        _TestAccess_instances.add(this);
        _TestAccess_testPrivate2.set(this, void 0); // private
        this.testPublic1 = "testPublic1：どこからでもアクセスできます";
        this.testPublic2 = "testPublic2：どこからでもアクセスできます";
        this.testPrivate1 = "testPrivate1：親クラス内からのみアクセスできます";
        __classPrivateFieldSet(this, _TestAccess_testPrivate2, "testPrivate2：どこからでもアクセスできます", "f");
        this.testProtected =
            "testProtected：親クラスと子クラスからのみアクセスできます";
    }
    readTest1() {
        console.log("publicなメソッドです");
        // クラス内なので全て呼び出せる
        console.log(this.testPublic1);
        console.log(this.testPublic2);
        console.log(this.testPrivate1);
        console.log(__classPrivateFieldGet(this, _TestAccess_testPrivate2, "f"));
        console.log(this.testProtected);
    }
    readTest2() {
        console.log("publicなメソッドです");
        // クラス内なので全て呼び出せる
        console.log(this.testPublic1);
        console.log(this.testPublic2);
        console.log(this.testPrivate1);
        console.log(__classPrivateFieldGet(this, _TestAccess_testPrivate2, "f"));
        console.log(this.testProtected);
    }
    readTest3() {
        console.log("privateなメソッドです");
        // クラス内なので全て呼び出せる
        console.log(this.testPublic1);
        console.log(this.testPublic2);
        console.log(this.testPrivate1);
        console.log(__classPrivateFieldGet(this, _TestAccess_testPrivate2, "f"));
        console.log(this.testProtected);
    }
    readTest5() {
        console.log("protectedなメソッドです");
        // クラス内なので全て呼び出せる
        console.log(this.testPublic1);
        console.log(this.testPublic2);
        console.log(this.testPrivate1);
        console.log(__classPrivateFieldGet(this, _TestAccess_testPrivate2, "f"));
        console.log(this.testProtected);
    }
}
_TestAccess_testPrivate2 = new WeakMap(), _TestAccess_instances = new WeakSet(), _TestAccess_readTest4 = function _TestAccess_readTest4() {
    console.log("privateなメソッドです");
    // クラス内なので全て呼び出せる
    console.log(this.testPublic1);
    console.log(this.testPublic2);
    console.log(this.testPrivate1);
    console.log(__classPrivateFieldGet(this, _TestAccess_testPrivate2, "f"));
    console.log(this.testProtected);
};
class TestAccess2 extends TestAccess {
    // publicとprivateが呼び出せる
    readTest6() {
        console.log(this.testPublic1); // publicなので呼びだせる
        console.log(this.testPublic2); // publicなので呼びだせる
        //console.log(this.testPrivate1); // privateなので呼び出せない
        //console.log(this.#testPrivate2); // privateなので呼び出せない
        console.log(this.testProtected); // protectedなので呼び出せる
        this.readTest1(); // publicなので呼びだせる
        this.readTest2(); // publicなので呼びだせる
        //this.readTest3(); // privateなので呼び出せない
        //this.#readTest4(); // privateなので呼び出せない
        this.readTest5(); // protectedなので呼び出せる
    }
}
// 外部からのアクセス(pblicのみ呼び出せる)
const parent = new TestAccess();
console.log(parent.testPublic1); // publicなので呼びだせる
console.log(parent.testPublic2); // publicなので呼びだせる
//console.log(parent.testPrivate1); // privateなので呼び出せない
//console.log(parent.#testPrivate2); // privateなので呼び出せない
//console.log(parent.testProtected); // protectedなので呼び出せない
parent.readTest1(); // publicなので呼びだせる
parent.readTest2(); // publicなので呼びだせる
//parent.readTest3(); // privateなので呼び出せない
//parent.#readTest4(); // privateなので呼び出せない
//parent.readTest5(); // protectedなので呼び出せない
const child = new TestAccess2();
console.log(child.testPublic1); // publicなので呼びだせる
console.log(child.testPublic2); // publicなので呼びだせる
//console.log(child.testPrivate1); // privateなので呼び出せない
//console.log(child.#testPrivate2); // privateなので呼び出せない
//console.log(child.testProtected); // protectedなので呼び出せない
child.readTest1(); // publicなので呼びだせる
child.readTest2(); // publicなので呼びだせる
//child.readTest3(); // privateなので呼び出せない
//child.#readTest4(); // privateなので呼び出せない
//child.readTest5(); // protectedなので呼び出せない
