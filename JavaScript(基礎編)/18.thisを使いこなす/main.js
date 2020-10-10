
// thisはタイミングによって取れる値が変わる。JavaScriptを理解する一つの壁
// クラスなどで囲まれていない状態で、console.log(this)とするとWindowオブジェクト(グローバルオブジェクト)を参照する。
// this は直近で囲まれているオブジェクトを参照するロジックとなっている。

document.addEventListener('DOMContentLoaded', function () {
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    ta.animate();
    ta2.animate();

    // ボタンクリックに合わせた thisの束縛を行う
    // 具体的な実装としては、現在HTML上に記述しているJavaScript(onclick="document.querySelector('.animate-title').classList.toggle('inview');)を
    // HTML上から削除し、その代わりにIDを付与して ボタンが押されたタイミングで発火するようにする
    const btn = document.querySelector('#btn');
    // clickした時に発火させるという意味で第一引数に'click'を記述。
    // clickイベントでaddEventListenerを使用する場合は、トリガーとなっているHTML要素が関数のthisとして渡ってくる。
    // なので、ta.animateだけだと、この場合のthisの参照先であるbtnは <button id="btn">Animation</button> になっている。
    // bindを使って thisの参照先を taにさせる必要がある。
    btn.addEventListener('click', ta.animate.bind(ta))

    // もしくは、bindを使わない方法として
    // 下記のように無名関数で囲むことで実行できる。 詳細を説明するにはかなり複雑になるそう。
    // btn.addEventListener('click', function () {
    //     ta.animate();
    // })
});

class TextAnimation {
    constructor(el) {
        console.log(this);
        this.el = document.querySelector(el);       // この thisは、直近のオブジェクトであるインスタンス化された ta を参照している
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.el.classList.toggle('inview');

        // wndow.setTimeout から省略されているので
        // setTimeout(function(){ 
        //     // この this は直近のオブジェクトであるwindowを参照している
        //     console.log(this);
        //     // この状態だと、thisはwindowオブジェクトを参照しているので elが含まれていないため、エラーとなっている。
        //     // thisの参照先を window から TextAnimationへ変更してあげる必要がある
        //     this.el.classList.toggle('inview');
        //     // 関数にbindメソッドを付けることで、thisの参照先をanimate()の中の thisの参照先であるTextAnimationと一致させことができる
        //     // bindを用いた this の束縛という
        // }.bind(this));

        // //もしくは、bindを使わない方法として、animate()の中でthis を変数に格納してしまう方法もある
        // const _that = this;
        // setTimeout(function () { 
        //     console.log(_that);     // animate()関数の中で定義した_that変数からTextAnimationを参照することもできる
        //     _that.el.classList.toggle('inview');
        // });
    }
}
