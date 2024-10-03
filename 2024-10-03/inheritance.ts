export {};

// 親クラスを定義
class Character {
  name: string;
  perk1: string;
  perk2: string;
  perk3: string;
  speed: number;

  constructor(name: string, perk1: string, perk2: string, perk3: string) {
    this.name = name;
    this.perk1 = perk1;
    this.perk2 = perk2;
    this.perk3 = perk3;
    this.speed = 4.0;
  }
  introduce() {
    console.log(
      `キャラクター名：${this.name}／固有パーク：${this.perk1}、${this.perk2}、${this.perk3}／足の速さ：${this.speed}m/s`
    );
  }
}

// Characterを継承した子クラスを定義
class Killer extends Character {
  setSpeed(speed: number) {
    this.speed = speed;
  }
}

// 親クラスのインスタンス化
const dwight = new Character(
  "ドワイト・フェアフィールド",
  "絆",
  "有能の証明",
  "リーダー"
);
dwight.introduce(); // "キャラクター名：ドワイト・フェアフィールド／固有パーク：絆、有能の証明、リーダー／足の速さ：4m/s"

// 子クラスのインスタンス化
// 親クラスのコンストラクタで設定された引数を渡す必要がある
//const trapper = new Killer(); // error: Expected 4 arguments, but got 0.
const trapper = new Killer("不安の元凶", "野蛮な力", "興奮", "トラバサミ");
trapper.setSpeed(4.6);
trapper.introduce(); // "キャラクター名：不安の元凶／固有パーク：野蛮な力、興奮、トラバサミ／足の速さ：4.6m/s"

// アクセス修飾子のテスト
class TestAccess {
  public testPublic1: string; // public
  testPublic2: string; // public
  private testPrivate1: string; // private
  #testPrivate2: string; // private
  protected testProtected: string; // protected

  constructor() {
    this.testPublic1 = "testPublic1：どこからでもアクセスできます";
    this.testPublic2 = "testPublic2：どこからでもアクセスできます";
    this.testPrivate1 = "testPrivate1：親クラス内からのみアクセスできます";
    this.#testPrivate2 = "testPrivate2：どこからでもアクセスできます";
    this.testProtected =
      "testProtected：親クラスと子クラスからのみアクセスできます";
  }

  public readTest1() {
    console.log("publicなメソッドです");
    // クラス内なので全て呼び出せる
    console.log(this.testPublic1);
    console.log(this.testPublic2);
    console.log(this.testPrivate1);
    console.log(this.#testPrivate2);
    console.log(this.testProtected);
  }
  readTest2() {
    console.log("publicなメソッドです");
    // クラス内なので全て呼び出せる
    console.log(this.testPublic1);
    console.log(this.testPublic2);
    console.log(this.testPrivate1);
    console.log(this.#testPrivate2);
    console.log(this.testProtected);
  }
  private readTest3() {
    console.log("privateなメソッドです");
    // クラス内なので全て呼び出せる
    console.log(this.testPublic1);
    console.log(this.testPublic2);
    console.log(this.testPrivate1);
    console.log(this.#testPrivate2);
    console.log(this.testProtected);
  }
  #readTest4() {
    console.log("privateなメソッドです");
    // クラス内なので全て呼び出せる
    console.log(this.testPublic1);
    console.log(this.testPublic2);
    console.log(this.testPrivate1);
    console.log(this.#testPrivate2);
    console.log(this.testProtected);
  }
  protected readTest5() {
    console.log("protectedなメソッドです");
    // クラス内なので全て呼び出せる
    console.log(this.testPublic1);
    console.log(this.testPublic2);
    console.log(this.testPrivate1);
    console.log(this.#testPrivate2);
    console.log(this.testProtected);
  }
}

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
