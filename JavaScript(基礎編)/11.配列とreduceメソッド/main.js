
// reduceメソッドは、配列の中身を足したり文字列として結合させたりする時に使う

const arry = [1, 2, 3, 4, 5];

arry.reduce(function (accu, curr) {
    console.log(accu, curr);
    return accu + curr;
});
// accu + curr の実行結果が戻り値として引数accuに入り、currに次の配列要素が代入されループ処理が続いていく

const str = 'animation';
const strArry = str.split('');

console.log(strArry);

const result = strArry.reduce((accu, curr) => {
    // return accu + '<' + curr + '>';     // accu には、処理を終えた結果が蓄積されていく。
    return `${accu}<${curr}>`;   // 上記はテンプレートリテラルで書き直すこともできる.バッククォートで囲むことが必要
}, '');
// 第二引数に空文字を指定する理由は、第一ループ目に配列の一番目の要素がaccuへ入る為、カッコが1文字目につかない
// そこで、空文字を初期値としてaccuに入れてあげることで配列全ての要素をcurrに入れることができる

console.log(result);
