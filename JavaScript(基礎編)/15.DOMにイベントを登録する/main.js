const btn = document.querySelector('#btn');
// btn.addEventListener('click', function () {
//     alert('hello');
// });

// 無名関数を引数にダイレクトで書くよりは、関数を変数に代入する形で外へ出してあげることがベター

// const hello = function () {                     // 変数に無名関数を代入して
//     alert('hello');
// }
// btn.addEventListener('click', hello);           // 第二引数に変数として指定する方法がなお良いらしい
// // mouseenter はマウスがホバーした際に発火する
// btn.addEventListener('mouseenter', hello);      // 第二引数に変数として指定する方法がなお良い。理由としては使い回す時に記述が少なくなるから

// const hello = function () {                    
//     // btn.style.color = 'red';                        // ボタンの文字色を変えるアクション
//     this.style.color = 'red';                       // btn を thisで置き換えることもできる。addEventListnerの中でthisを指定するとHTMLの要素に置き換わる
// }

const h1 = document.querySelector('h1');

// const hello = function () {                    
//     h1.style.color = 'red';                        // JavaScriptの特徴として外に変数を見にいくことができる
// }

function changeColor () {                    
    h1.style.color = 'red';                        // JavaScriptの特徴として外に変数を見にいくことができる
}
function changeBgColor () {                    
    h1.style.backgroundColor = 'green';                        // JavaScriptの特徴として外に変数を見にいくことができる
}

// btn.addEventListener('click', changeColor);          
// btn.addEventListener('click', changeBgColor);          // addEventListener には複数のイベントを登録できる
// btn.removeEventListener('click', changeBgColor);

// この他にもイベントハンドラと呼ばれる以下の記述がある
btn.onclick = changeColor;
btn.onclick = changeBgColor;
// しかし、この方法だと後述のコードに上書きされてしまい複数の指定ができない為、addEventListnerを使う方が良い