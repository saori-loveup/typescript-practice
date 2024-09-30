export {};

// public
class TestPublic {
  public firstName: string;
  lastName: string; // 宣言がない場合もpublic

  // コンストラクター
  public constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // メソッド
  public getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}
const david = new TestPublic("David", "King");
// 各メンバにアクセス可能
console.log(`${david.firstName} ${david.lastName}`); // David King
david.getFullName(); // David King

// private
class TestPrivate {
  private _firstName: string; // private修飾子
  #lastName: string; // #をつけることでもprivateになる

  // コンストラクターをprivateにするとnewできなくなる
  //private constructor(firstName: string, lastName: string) {
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this.#lastName = lastName;
  }

  // メソッド
  private getFullName() {
    console.log(`${this._firstName} ${this.#lastName}`);
  }
}
const kate = new TestPrivate("Kate", "Denson");
// 各メンバにアクセス不可
//console.log(`${kate._firstName} ${kate.#lastName}`);
//kate.getFullName(); // David King
