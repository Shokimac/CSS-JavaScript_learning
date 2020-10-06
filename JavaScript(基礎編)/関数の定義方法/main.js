
// 関数の実行方法
function hello(name, age) {
    // 関数に渡される値が引数
    // let name = 'Shoki';
    console.log('hello' + name + age);
    return name + age;
    // return を付けることで呼び出し元に値を返すことができる。戻り値という。
}

// 変数に関数を代入する記述でも同様の実行ができる
// ただし、変数に無名関数を代入する場合、変数扱いなので事前に定義しておかないとエラーになる
const hello = function(name, age) {    //function(name, age)のように、名前を持たない関数を無名関数という
    // 関数に渡される値が引数
    // let name = 'Shoki';
    console.log('hello' + name + age);
    return name + age;
    // return を付けることで呼び出し元に値を返すことができる。戻り値という。
}

// JavaScript では、()が変数のコードを実行する意味を持つ
hello('Shoki', 10);
const returnvalue = hello('Shoki2', 20);
// returnvalue に戻り値が格納される
console.log(returnvalue);
