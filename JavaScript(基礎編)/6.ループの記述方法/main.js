// const arry = [1, 2, 3, 4, 5];

// for (let i = 0; i < 5; i = i + 1) {     // iはインクリメントと呼ぶ。
//     console.log(i);
// }

// const arry = [1, 2, 3, 4, 5, 6];        // 仮に要素数が増えた場合

// for (let i = 0; i < arry.length; i++ ) {     // array.length で要素数を上限値に指定することで柔軟に対応することができる
//     console.log(i);                          
// }

// const arry = [1, 2, 3, 4, 5, 6];     

// for (let i in arry ) {              // 少ない記述で上記と同じ動作をする
//     // console.log(arry[i]);           // 配列の要素を取得することができる
//     console.log(i, arry[i]);        // インクリメントに対応した値を一括で見ることができる
// }

// for (let v of arry ) {               // of とした場合には、vの中身に配列の値が渡ってくる
//     console.log(v);                 // i, j, k はインクリメントを表すので、value の v に置き換えたりして混乱させないようにする
// }


// オブジェクトを含む配列の扱い方

const todos = [
    {
        id: 1,
        title: 'Go To School',
        completed: true
    },
    {
        id: 2,
        title: 'Go To Museum',
        completed: true
    },
    {
        id: 3,
        title: 'Go Shopping',
        completed: false
    }
]

// for (let i = 0; i < todos.length; i++) {
//     console.log(i, todos[i].title);     // todos[i]はオブジェクトであるので、タイトルを取得したい場合にはドット記法で取得できる
// }

// for (let i = 0; i < todos.length; i++) {
//     if (todos[i].completed === true) {      // if文を用いて条件分岐で取得
//         console.log(i, todos[i].title);
//     }
// }

// for (let i in todos ) {     // inを使った書き換え
//     let todo = todos[i];
//         console.log(i, todos[i].title);
    
// }

for (let todo of todos ) {     // ofを使った書き換え
    console.log(todo);         // todo にオブジェクトが渡ってくる
}
