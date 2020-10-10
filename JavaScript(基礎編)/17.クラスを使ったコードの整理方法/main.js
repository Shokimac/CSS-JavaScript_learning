// 同じコードを複数行書くのはプログラミングとしてやってはいけないこと
// クラスやオブジェクトにまとめることで、コードの再利用性を高める。

// クラスには、値を持たせること、そしてその値をいじる関数を登録することができるので
// ある程度の処理をまとめることが可能。
// class TextAnimation {
//     // クラスが初期化されるタイミングで呼び出されるconstructor関数を定義する
//     constructor(el) {
//         alert(el);
//     }
// }
// クラスを初期化するには new演算子を使う。初期化する作業をインスタンス化という。
// この引数がconstructor関数に渡ってくる
// new TextAnimation('Hello World');   // new演算子ではどの変数にも代入はされていない


// this を使うことで値を変数に格納することができる
// class TextAnimation {
//     constructor(el) {
//         this.el = el;       // ① 値を格納して
//     }
//     log() {
//         console.log(this.el);   // ② メソッド内でその値を扱えるのがクラスの特徴
//     }
// }
// // 上記の this が ta を指している
// const ta = new TextAnimation('Hello World');
// ta.log();
// alert(ta.el);


// 下記のコードをクラスにまとめてみる

// document.addEventListener('DOMContentLoaded', function () {
//     const el = document.querySelector('.animate-title');
//     const el2 = document.querySelector('.animate-title-2');
//     const str = el.innerHTML.trim().split("");
//     const str2 = el2.innerHTML.trim().split("");

//     // let concatStr = '';

//     // for(let c of str) {
//     //     c = c.replace(/\s+/, '&nbsp;');
//     //     concatStr += `<span class="char">${c}</span>`;
//     // }

//     el.innerHTML = str.reduce((acc, curr) => {
//         curr = curr.replace(/\s+/, '&nbsp;');
//         return `${acc}<span class="char">${curr}</span>`;
//     }, "");
//     el2.innerHTML = str2.reduce((acc, curr) => {
//         curr = curr.replace(/\s+/, '&nbsp;');
//         return `${acc}<span class="char">${curr}</span>`;
//     }, "");
// });

document.addEventListener('DOMContentLoaded', function () {
    // 初期化をaddEventListener のなかで行う
    // 引数に querySelectorへ渡す値を記述する
    const ta = new TextAnimation('.animate-title');
    // こうすることで、同じ処理を別の箇所へ施したい場合でも引数を変える記述だけでよくなる。
    const ta2 = new TextAnimation('.animate-title-2');
    // setTimeout 第二引数に1000とすることで、1秒後に実行するようにする
    setTimeout(() => {
        ta.animate();
        ta2.animate();
    }, 1000);
});

// クラスは定義された段階では処理を実行しないため、DOMContentLoadedには含めないようにする。
// 呼び出す際には、DOMが生成されている必要があるため、初期化を行う記述はDOMContentLoadedに含めないといけない。
class TextAnimation {
    constructor(el) {
        // const el の右辺と差し替える
        this.el = document.querySelector(el); // el から引数を取ってこれるように変更
        // const strを char に変更(一文字ずつという意味で分かりやすい)
        // this.el から空白を境に複数ワードを取得する
        this.chars = this.el.innerHTML.trim().split("");
        // _splitText() 処理後の文字列をel.innerHTMLに格納する
        this.el.innerHTML = this._splitText();
    }

    // reduceメソッドで文字列を結合する処理をこの関数へ挿入
    // アンダースコアを先頭につけているのは、プライベートメソッドとしての意味を持つ。ただ、クラス外からも呼び出せるのであくまでネーミング上の意味
    _splitText() {
        return this.chars.reduce((acc, curr) => { // str を this.chars に置き換えているので変更
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    // アニメーションは'inview'クラスがついた時に実行されるように animateメソッドを用意する
    animate() {
        // classList プロパティは、クラスの配列が格納されている。
        // toggle メソッドは、inviewがついていない場合は付ける、ついている場合は消す動作をする
        this.el.classList.toggle('inview');
    }
}

// 機能をクラス毎に分けておくことで、複数人で開発する際にメソッドと使い方さえ覚えておけば良いので楽になる
// また、修正を行う場合もクラス内で変更さえすれば適用させている箇所全てに反映できるのメンテナンス性も良い
// このようなやり方をオブジェクト指向型プログラミングという

