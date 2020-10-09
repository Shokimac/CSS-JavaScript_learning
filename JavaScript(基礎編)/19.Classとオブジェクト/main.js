
// キー情報と値が対になっているものをJavaScriptではオブジェクトという

const obj = {
    first_name: "Shoki",
    last_name: "Yoko",
    // オブジェクトには関数も登録できる
    printFullName: function () {
        console.log('hello')
    }
}
// オブジェクトにアクセスする際はドット記法で呼び出せる
console.log(obj.first_name);
// また、オブジェクトのメソッドを実行する際は下記のようになる
obj.printFullName();

// JavaScript の class とはオブジェクトを生成するための一つのまとまりである
class myObj {
    // コンソール上で見てみると、キーと値が対になっていて以下のクラスはオブジェクトであることがわかる。
    // class という演算子を用いて、オブジェクトを初期化する記述をconstructor内に書いている。
    constructor() {
        this.first_name = "Shoki";
        this.last_name = "Yoko";
    }

    // クラス内でメソッドを登録する場合には、function() がいらない
    printFullName() {
        console.log('hello')
    }
}
// new 演算子を用いて、クラスをオブジェクト化して変数へ代入している
const obj2 = new myObj();

// メソッドを実行すると、さっきのオブジェクトからメソッドを実行した場合と同じ結果になる
obj.printFullName();
obj2.printFullName();