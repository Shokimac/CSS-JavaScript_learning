if (1 == '1' ) {
    console.log('This is true');
} else {
    console.log('This is false');
}

// == は、型の変換をして比較した後左辺と右辺のデータ型までは見ない、 === は左辺と右辺でデータ型が一致するところまで見る

if (1 == 'true' ) {     // boolean の true は数字にすると1であるため、==の比較演算子であれば true となる
    console.log('This is true');
} else {
    console.log('This is false');
}

// イコールでない事を確認したい場合
if (1 != '1' ) {     // !== は、型の比較まで行う。 != は、値の比較のみ
    console.log('This is true');
} else {
    console.log('This is false');
}

if (1 == '1' && 1 === '1' ) {       // && and || or
    console.log('This is true');
} else {
    console.log('This is false');
}


const num = 10;
if ( num ) {       // if文に変数のみ設定されている場合は、変数に値が設定されていればtrue
    console.log('This is true');
} else {
    console.log('This is false');
}

if ( !num ) {       // ! not演算子を変数の頭につける事で、逆になる
    console.log('This is true');
} else {
    console.log('This is false');
}

