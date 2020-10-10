
// forEachメソッドとは、配列の要素ひとつひとつに処理を行いたい場合に使う

const arry = [1, 2, 3, 4, 5];

// arry.forEach(function (val, i, ary) {       // 記述する引数は、関数内で使える変数を定義するものとして認識
//     console.log(val, i, ary);
// });


// // forEachは記述がすっきりする。 変数を余分に記述しなくていいメリットはバグを生む可能性を低くさせるメリットも併せ持つ
// arry.forEach(function (val) {      
//     console.log(val);
// });

// // for文は記述は多くなる
// for (let i = 0; i < arry.length; i++){
//     const val = arry[i];
//     console.log(val);
// }

// アロー関数に直すとここまで簡略化できる。(ただし、引数が一つの場合と処理文が１行の場合)
arry.forEach(val => console.log(val));

