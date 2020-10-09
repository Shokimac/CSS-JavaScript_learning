
//オブジェクトを定義する方法は2つ
// const person = {};          // オブジェクトを初期化
// person.name = 'Shoki';      // オブジェクトのnameプロパティに値を指定

// const person = { name: 'Shoki' };          // オブジェクトを初期化すると同時に値を格納。 {}←これは、オブジェクトリテラルと呼ぶ

// 以上が、オブジェクトの一般的な使い方

const person = {                // constとしても配列の中身は操作可能。しかし、配列を初期化するようなことはできない。
    name: ['Shoki', 'Meru'],
    age: 32,
    gender: 'male',
    interests: {
        sports: 'soccer',
        music: 'piano'
    },
    getFullName: function() {      //オブジェクトにはメソッドも格納できる
        console.log(this.name[0] + this.name[1])        // thisは宣言された際のオブジェクトを指す
    }
};

// console.log(person.name);   // person.name をドット記法という
// console.log(person.name[0]);    // これで配列の要素を指定して表示することもできる

// ドット記法の他にブラケットがある
const ageKey = 'age';
person[ageKey] = 12;        // person[] をブラケット記法。変数が入れられるため、キー情報が動的に変わる場合などに使用される
console.log(person.age)
person.getFullName();

