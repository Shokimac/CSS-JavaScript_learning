
// const hello = function(name = 'Tom') {
//     console.log('hello' + name);
// }
// これをアロー関数にして記述すると

// const hello = (name = 'Tom') => console.log('hello' + name);
// 無名関数の場合にいちいち functionを書かなくて済む
// また、中身が1行であれば {} も削除できる
// アロー関数は記述を簡略化できる。

// const hello = name => console.log('hello' + name);
// // デフォルト値が設定されていない場合は(name = 'Tom')から ()も取り除ける。ただし、引数は1つの場合のみ

// hello();

const arry = [1, 2, 3, 4, 5];

// arry.forEach(function (value) {
//     console.log(value);
// });
// これをアロー関数にする事で

arry.forEach(value => console.log(value));
// for文などで記述の簡略化ができる
