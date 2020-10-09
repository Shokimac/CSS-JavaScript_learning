
// 引数に渡す関数をコールバック関数という

// function hello(callback) {      //２：引数にgetNameが渡ってくる
//     console.log('hello' + callback());      //３：関数内でcallbackが実行される。 ５：callback()に戻り値が代入される。
// }

// function getName() {
//     return 'Shoki';         //４：戻り値として文字列が返る
// }

// hello(getName);     // １：hello関数を実行すると

// hello(function() {      //関数の引数へダイレクトに無名関数を記述する方法もよく使われる
//     return 'Shoki';
// });

// hello(() => 'Shoki');   // アロー関数を用いるとここまで記述を省略できる


// callbackに引数を渡したい場合

// function hello(callback, secondName) {              // 第２引数を新しく設定
//     console.log('hello' + callback(secondName));    // callback関数の引数にsecondNameを設定する
// }

// hello(function(name) {              //第一引数にcallback関数として無名関数を渡している
//     return 'Shoki' + name;          
// }, 'Meru');             // 第２引数に文字列を指定する

// 処理の流れ
// hello()関数を実行する。第一引数の無名関数がcallbackに渡される
// hello関数内で、callback関数に無名関数が渡される
// 無名関数の引数secondNameにhello関数実行時に記述した文字列が渡される
// 無名関数内で引数に渡された文字列がnameに渡され、実行結果のShokiMeruがcallback(secondName)と置き換わりhelloの実行結果が表示される。

// function doSomething(a, b, callback) {
//     const result = callback(a, b);
//     console.log(result)
// }

// function multiply(a, b) {
//     return a * b;
// };

// function plus(a, b) {
//     return a + b;
// }

// doSomething(2, 2, multiply);
// doSomething(3, 6, plus);

// doSomething関数に渡した関数の実行結果を表示する処理を書く
// doSomething関数に必要な値と実行したい処理を書いた関数を引数として渡してあげる
// 実行結果が表示される
// 同じ関数でも、別の関数を渡してあげることによって異なる結果を生む。それがコールバック関数


// コールバック関数とループ処理

const arry = [1, 2, 3, 4, 5];

function forEach(ary, callback) {
    for (let i = 0; i < ary.length; i++) {
        callback(ary[i]);
    }
}

function log(val) {
    console.log(val);
}

function double(val) {
    val = val * 2;
    log(val);
}

forEach(arry, double);

// forEach関数を実行した場合、第一引数に配列、第二引数に関数が入る
// forEach関数内でcallbackにdouble関数が入り、引数には配列の要素が入る
// よって、double関数内に配列の要素が渡り、実行結果をlog関数に渡すことで実行結果が表示される。
