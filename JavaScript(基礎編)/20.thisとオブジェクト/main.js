const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function () {
        // ここで、thisが参照しているのは objになるので、objのプロパティであるfirst_nameが使える
        console.log(this.first_name);
        const fn = function() {
            console.log(this);
        };
        window.setTimeout(fn);  
    }
}

// クラスでは、まだオブジェクトが生成されてないので、クラス内では thisを使うことができない
// 値を登録する際に、this.first_nameとプロパティを指定する必要がある
// つまり、クラス内のthisは初期化後、生成されるオブジェクトを指している
class MyObj {
    constructor() {
        this.first_name = 'Mafia';
        this.last_name = 'Code';
    }

    printFullName() {
        console.log(this.first_name);
        const fn = function() {
            console.log(this);
        };
        window.setTimeout(fn)   
    }
}

const obj2 = new MyObj();


obj.printFullName();
obj2.printFullName();