const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function () {
        console.log(this);

        window.setTimeout(function () {
            // この時点でのthisは、直近のオブジェクトである windowになる。
            console.log(this);
            // そこで、bindの第一引数にオブジェクトを与えることで参照先を指定することができる。
            // ちなみにbindの引数はオブジェクトであれば良いので、以下のように書くこともできる。
        }.bind({ first_name: 'Mafia' }));
        // bindを使うことでthisの参照先を思い通りにできる
    }
}

obj.printFullName();