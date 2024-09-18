export {};

// オーバーロードシグネチャ
function hello(person: string): void; // シグネチャ1
function hello(persons: string[]): void; // シグネチャ2
// 実装シグネチャ
function hello(person: string | string[]): void {
  if (typeof person === "string") {
    // シグネチャ1の時のパターン
    console.log(`Hello ${person}`);
  } else {
    // シグネチャ2の時のパターン
    console.log(`Hello ${person.join(",")}`);
  }
}

hello("シグネチャ1"); // Hello シグネチャ1
hello(["シグネチャ1", "シグネチャ2"]); // Hello シグネチャ1,シグネチャ2

// オーバーロードシグネチャ
function hello2(lastName: string, firstName: string): void;
function hello2(name: string, age: number, title: string): void;
// 実装シグネチャ
function hello2(
  name: string,
  firstNameOrAge: string | number,
  title?: string
): void {
  let message;
  if (typeof firstNameOrAge === "string") {
    message = `Hello ${name} ${firstNameOrAge}`;
  } else {
    if (title) {
      message = `Hello ${name}${title}(${firstNameOrAge})`;
    } else {
      message = `Hello ${name}(${firstNameOrAge})`;
    }
  }
  console.log(message);
}
hello2("山田", "太郎"); // Hello 山田 太郎
hello2("山田太郎", 20, "さん"); // Hello 山田太郎さん(20)
// オーバーロードシグネチャに合致していない場合はエラーになる
//hello2("山田", "太郎", "さん"); // error: The call would have succeeded against this implementation, but implementation signatures of overloads are not externally visible.
