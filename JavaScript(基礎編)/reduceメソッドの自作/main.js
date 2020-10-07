
// reduce の中身について自作して確認してみる

const str = 'animation';
const strArry = str.split('');

function tag(accu, curr) {
    console.log(accu, curr);
    return `${accu}<${curr}>`;                          // curr を <> で囲んで返す
}

function reduce(arry, callback, defaultValue) {     
    let accu = defaultValue;                            // 第三引数(空文字)を accu へ代入

    for (let i = 0; i < arry.length; i++){              // for文で配列数分回す
        let curr = arry[i];                             // curr に配列要素を格納
        accu = callback(accu, curr);                    // 第二引数(tag関数)にaccu と curr を引数として渡し実行。 返された文字を accu へ蓄積していく。
    }

    return accu;                                        // callback()からの実行結果を蓄積した accu を返す
}

const result = reduce(strArry, tag, "");        // reduce関数を実行し、result関数へ代入
console.log(result);                            // result関数を表示
