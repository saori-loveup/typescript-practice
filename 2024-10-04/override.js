"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 親クラスを定義
class Team {
    constructor(name, mascot, captain) {
        this.name = name;
        this.mascot = mascot;
        this.captain = captain;
    }
    introduce() {
        console.log(`${this.name}（チームマスコット：${this.mascot}／キャプテン：${this.captain}）`);
    }
}
// 子クラスを定義
class Vleague extends Team {
    // コンストラクタのオーバーライド
    constructor(name, mascot, captain, area) {
        super(name, mascot, captain); // 親クラスのすべての引数を渡す
        this.area = area;
    }
    introduce() {
        console.log(`【${this.area}】チーム情報`);
        // 親クラスのメソッド呼び出し
        super.introduce();
    }
}
const kubota = new Vleague("クボタスピアーズ大阪", "スッピー", "枡富 滉", "西地区");
kubota.introduce();
