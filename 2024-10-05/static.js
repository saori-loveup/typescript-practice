"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TestClass {
    static staticMethod() {
        return "静的メソッドです";
    }
}
// staticメンバーの定義
TestClass.staticProperty = "静的プロパティです";
// staticメンバーにアクセス(インスタンスは作る必要がない)
console.log(TestClass.staticProperty);
console.log(TestClass.staticMethod());
// インスタンスからはstaticメンバーはアクセスできない
const testClass = new TestClass();
//console.log(testClass.staticProperty); // error: Property 'staticProperty' does not exist on type 'TestClass'. Did you mean to access the static member 'TestClass.staticProperty' instead?
//console.log(testClass.staticMethod()); // error: Property 'staticMethod' does not exist on type 'TestClass'. Did you mean to access the static member 'TestClass.staticMethod' instead?
