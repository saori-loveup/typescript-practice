export {};

// クラス宣言
class Member {
  name = "";
  email: string = ""; // 型を明示
}
// クラス式
const Member2 = class {
  name: string = "";
  id: string = "";
  password: string = "";
};

// クラスからオブジェクトを生成
const test1 = new Member();
const test2 = new Member2();
console.log(test1); // Member { name: '', email: '' }
console.log(test2); //Member2 { name: '', id: '', password: '' }

// オブジェクトのプロパティにアクセス
test1.name = "太郎";
test2.id = "taro";
console.log(test1); // Member { name: '太郎', email: '' }
console.log(test2); // Member2 { name: '', id: 'taro', password: '' }

// クラス型注釈の型として指定
const test3: Member = new Member();
// const test4: Member = "test"; // error: Type 'string' is not assignable to type 'Member'.
// 関数の引数の型注釈でも同様にクラスを指定できる
function showEmail(member: Member) {
  console.log(`${member.name}のメールアドレス：${member.email}`);
}
test3.name = "花子";
test3.email = "hanako@itoo.info";
showEmail(test3); // "花子のメールアドレス：hanako@itoo.info"
// 引数にclass Memberのオブジェクトを指定しないと型一致しないのでエラーになる
// showEmail("aaaa"); // error: Argument of type 'string' is not assignable to parameter of type 'Member'.

// showEmail()をメソッドに書き換える
class Member3 {
  name: string = "";
  email: string = "";

  showEmail() {
    // クラス内の他メンバを参照するので引数は必要ない
    console.log(`${this.name}のメールアドレス：${this.email}`); // クラス内の他メンバを参照する際はthiを使用する
  }
}
const test5 = new Member3();
test5.name = "一郎";
test5.email = "ichiro@itoo.info";
test5.showEmail(); // "一郎のメールアドレス：ichiro@itoo.info"

// コンストラクタ
class TestClass {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  hello() {
    console.log(`Hello ${this.firstName} ${this.lastName}!`);
  }
}
// new時に引数が指定されていないとエラー
//const testclass1 = new TestClass(); // error: Expected 2 arguments, but got 0.
const testclass1 = new TestClass("Anna", "Gray");
testclass1.hello(); // "Hello Anna Gray!"

// Getter
class Person {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const person1 = new Person("Adam", "Francis");
// GetterでfullNameを取得
console.log(person1.fullName); // "Adam Francis"
// 値を設定はできない
//person1.fullName = "Dwight Fairfield"; // error: Cannot assign to 'fullName' because it is a read-only property.

// Setterを追加
class Person2 {
  firstName: string;
  lastName: string;
  _birthYear: number;
  constructor(firstName: string, lastName: string, birthYear: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._birthYear = birthYear;
  }

  // Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Setter
  set birthYear(year: number) {
    if (year > new Date().getFullYear()) {
      throw new Error("不正な年です");
    }
    this._birthYear = year;
  }
}
const person2 = new Person2("Meg", "Tohmas", 2000);
console.log(person2); // Person2 { firstName: 'Meg', lastName: 'Tohmas', _birthYear: 2000 }
//person2.birthYear = 2025; // Error: 不正な年です
person2.birthYear = 2001;
console.log(person2); // Person2 { firstName: 'Meg', lastName: 'Tohmas', _birthYear: 2001 }
