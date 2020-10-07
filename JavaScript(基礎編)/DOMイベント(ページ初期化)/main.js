
// DOMContentLoaded とは、ブラウザがHTMLを解釈してDOMツリーを生成し終わった後に発火するイベントリスナー

const dcl = document.querySelector('.dcl');
const load = document.querySelector('.load');

// document.addEventListener("DOMContentLoaded", function () {
//     dcl.classList.add('done');
// });

// const h1 = document.querySelector('h1');
// h1.style.color = 'red';
// <script src="main.js"></script>が、HTML要素より上にあるとDOMが生成されていない状態で
// DOMを通してJavaScriptがHTMLにスタイルを適用させようとする為、エラーが起こる。
// DOMContentLoaded を用いることでこのエラーを防げる

// 仮に、<script src="main.js"></script>を一番上に持っていき下記のように
// DOMContentLoaded で記述すると、スタイルを適用させることができる

// document.addEventListener("DOMContentLoaded", function () {
//     const h1 = document.querySelector('h1');
//     h1.style.color = 'red';
// });

// それに対して、下記の load は画像が全て読み込まれた後で発火するためDOMContentLoadedよりも確実に遅くなる
// 画像の表示を待つ必要がないものはDOMContentLoadedを使うのが良い

window.addEventListener("load", function () {
    load.classList.add('done');
});