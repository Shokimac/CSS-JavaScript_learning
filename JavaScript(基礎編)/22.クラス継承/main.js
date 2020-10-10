
// クラス継承とは、重複した記述を行わずに他クラスから機能を継承した上で新しく機能を追加したり、またはその一部を変更したり出来る


// 下のTextAnimationの機能を継承して新しいクラスを定義する場合
// class TextAnimation {
//     constructor(el) {
//         this.el = document.querySelector(el);
//         this.chars = this.el.innerHTML.trim().split("");
//         this.el.innerHTML = this._splitText();
//     }
//     _splitText() {
//         return this.chars.reduce((acc, curr) => {
//             curr = curr.replace(/\s+/, '&nbsp;');
//             return `${acc}<span class="char">${curr}</span>`;
//         }, "");
//     }
//     animate() {
//         this.el.classList.toggle('inview');
//     }
// }

// 新しいクラス名の後に、extendsを記述して継承するクラスを記述する
// クラス継承するとメソッドが引っ張られてくるので書かなくて済む
// class TextAnimation2 extends TextAnimation {
//     constructor(el) {
//         // 親クラスのconstructorを継承する場合には super();と記述する
//         // 引数に親クラスconstructorで使用されている引数を指定してあげる必要がある
//         super(el);
//     }
// }


// 実践演習
// 現在、style.scss(41行目)でアニメーションの適用範囲が30文字までとなっているため
// JavaScriptでアニメーションを行い、かつクラスの継承をふまえて全ての文字に適用させられるように記述する

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#btn');
    // 新しいクラスと、引数には変更したHTMLのクラス名を記述
    const ta = new TweenTextAnimation('.tween-animate-title');
    ta.animate();
    btn.addEventListener('click', ta.animate.bind(ta));
});

class TextAnimation {
    constructor(el) {
        // DOMという新しいプロパティを用意して、そこに全てのDOMをまとめることでわかりやすくする
        this.DOM = {};
        this.DOM.el = document.querySelector(el);
        // this.el = document.querySelector(el);
        // この this.charsは文字列を配列にしたもの。DOMではないことを明示的にしている
        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.el.classList.toggle('inview');
    }
}

// そこで今回、アニメーションを行う場合によく使われる TweenMaxというライブラリを使用する
class TweenTextAnimation extends TextAnimation {
    constructor(el) {
        super(el);
        this.DOM.el.chars = this.DOM.el.querySelectorAll('.char');
    }
    // 今回、animate()メソッドを書き換えていく
    animate() {
        this.DOM.el.classList.add('inview');
        // 配列の文字列ひとつひとつに処理を行うため、引数cに1文字ずつ入れていく
        this.DOM.chars.forEach((c, i) => {
            // TweenMaxの書き方。今回は toメソッドを使用。第一引数に対象となるDOM、第二引数にアニメーションの間隔(durationのようなもの)。第三引数にアニメーションの詳細をオブジェクトで渡す。
            TweenMax.to(c, .6, {
                ease: Back.easeOut,
                delay: i * .05,
                startAt: { y: '-50%', opacity: 0 },
                y: '0%',
                opacity: 1
            });
        });
        this.el.classList.toggle('inview');
    }
}