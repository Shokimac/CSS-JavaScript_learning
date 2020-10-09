
// var は古いため、letとconstで実装する

// const は上書きができないのでエラーとなる
const name = 'Tom';

console.log('hello' + name);

// letは変数の上書きが可能
// let name = 'Tom';
// name = 'Tim';

// console.log('hello' + name);

// 動的型付言語
// 格納する値によって変数のデータ型が動的に変わっていく。
// Number, String, Boolean, Undefined, Null, Symbol

let str = 'str';
console.log(typeof str);
let num = 123;
console.log(typeof num);
let boo = false;
console.log(typeof boo);
let und = undefined;
console.log(typeof und);