export {};

class TestClass {
  // staticメンバーの定義
  static staticProperty = "静的プロパティです";
  static staticMethod() {
    return "静的メソッドです";
  }
}

// staticメンバーにアクセス(インスタンスは作る必要がない)
console.log(TestClass.staticProperty);
console.log(TestClass.staticMethod());

// インスタンスからはstaticメンバーはアクセスできない
const testClass = new TestClass();
//console.log(testClass.staticProperty); // error: Property 'staticProperty' does not exist on type 'TestClass'. Did you mean to access the static member 'TestClass.staticProperty' instead?
//console.log(testClass.staticMethod()); // error: Property 'staticMethod' does not exist on type 'TestClass'. Did you mean to access the static member 'TestClass.staticMethod' instead?
