// まず、DOMContentLoaded でイベントが発火するかテスト
// document.addEventListener('DOMContentLoaded', function () {
//     alert('hello');
// });


// document.addEventListener('DOMContentLoaded', function () {
//     const el = document.querySelector('.animate-title');    // ANIMATION の文字列を取得する
//     // console.log(el.innerHTML);                              // HTML の文字列を取得するので、innerHTML を用いる
//     console.log(el.innerHTML.trim());                          // 前後の余分なスペースを trim() で削除する
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const el = document.querySelector('.animate-title');
//     const str = el.innerHTML.trim();
//     let concatStr = '';

//     for (let c of str) {        // 文字列でもfor文が書ける。 文字列がひとつずつループされて変数 c に格納される
//         concatStr += `<span class="char">${c}</span>`    // 文字列の中に変数を使用する場合は、テンプレートリテラルを用いるのが良い  
        
//     }

//     el.innerHTML = concatStr;       // 最初に取得したHTMLの文字列が入った変数 el に反映させる
// });


document.addEventListener('DOMContentLoaded', function () {
    // const el = document.querySelector('.animate-title');
    // const str = el.innerHTML.trim();
    // let concatStr = '';

    // for (let c of str) {
    //     c = c.replace(' ', '&nbsp;');       // replace を用いると文字を置換することができる。第一引数に変換前の文字、第二引数に変換後の文字。 &nbspはHTMLで半角スペースを表示させるための記述
    //     concatStr += `<span class="char">${c}</span>`
    // }


    // reduceを使ってfor文を書き換える
    const el = document.querySelector('.animate-title');
    const str = el.innerHTML.trim().split("");
    // reduceを使う場合には配列に直す必要があるため、split("空文字")を記述

    el.innerHTML = str.reduce((accu, curr) => {
        // curr の中に処理前の文字が代入され、accuに処理後の文字が蓄積される
        curr = curr.replace(' ', '&nbsp;');
        console.log(accu);
        return `<span class="char">${curr}</span>`;
        // 先頭に${accu}を付ける必要は、前回ループ時の文字列が格納されているaccuに蓄積させていくため
        // 先頭に${accu}を付けないと、accuの中身が上書きされていってしまう。
    }, "");
});
