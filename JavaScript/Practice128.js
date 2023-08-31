// Практика 128
class Coin {
    // Сделать: constructor, collect(), getValue(), getMessage()
    constructor(name, price) {
        this.name = name
        this.price = price
        this.count = 0
    }

    collect() {
        this.count += 1
    }

    getValue() {
        return this.price * this.count
    }

    getMessage() {
        return `${this.count} ${this.name} в кошельке`
    }
  }
  
class Ether extends Coin {
    // Сделать: constructor и наследование
    constructor() {
        super("ETH", 1000)
    }
  }
  
class Bitcoin extends Coin {
    // Сделать: constructor и наследование
    constructor() {
        super("BTC", 30000)
    }
  }

class Wallet {
    // Сделать: constructor, addCoin() и getBalance()
    constructor() {
        this.coins = []
    }

    addCoin(coin) {
        this.coins.push(coin)
    }

    getBalance() {
        /*sum = 0
        this.coins.array.forEach(element => {
            sum += element.getBalance()
        });*/
        return this.coins.reduce((total, current) => {
            return total + current.getValue()
        }, 0)
    }
}
// Функции-конструкторы
class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    isSquare() {
        return this.width === this.height
    }
}
console.log(typeof Rectangle)
//
function Rectangle111(width, height) {
    this.width = width
    this.height = height
}
Rectangle111.prototype.isSquare = function() {
    return this.width === this.height
}
//
function Multisig(owners, min) {
    this.owners = owners
    this.min = min
}
Multisig.prototype.approveTx = function(sigs) {
    return sigs >= this.min
}
Multisig.prototype.addOwner = function(owner) {
    this.owners.push(owner)
}
// прототипное наследование
function Gorilla() {

}
function Banana() {

}
function GorillaBanana() {

}
Gorilla.prototype.eat = function() {

}
Banana.prototype.grow = function() {

}
GorillaBanana.prototype.eat = Gorilla.prototype.eat
GorillaBanana.prototype.grow = Banana.prototype.grow
// Цепочка прототипов
class Welcome {
    sayGm() {
        return "gm!"
    }
}
const welcome = new Welcome()
//
Object.getPrototypeOf(welcome)
// {constructor: ƒ, sayGm: ƒ}
Object.getPrototypeOf(Object.getPrototypeOf(welcome))
// {constructor: ƒ, hasOwnProperty: ƒ, isPrototypeOf: ƒ, …}
//
class Parent {
    parentMethod() {

    }
}
class Child extends Parent {
    childMethod() {

    }
}
const child = new Child()
Object.getPrototypeOf(child)
// {constructor: ƒ, childMethod: ƒ}
Object.getPrototypeOf(Object.getPrototypeOf(child))
// {constructor: ƒ, parentMethod: ƒ}
Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(child)))
// {constructor: ƒ, hasOwnProperty: ƒ, isPrototypeOf: ƒ, …}
Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(child))))
// null
//
class User {
    constructor(address, balance) {
        this.address = address
        this.balance = balance
    }
    getAddress() {
        return this.address
    }
    getBalance() {
        return this.balance
    }
}
class Owner extends User {
    getAddress() {
        return `${this.address} [owner]`
    }
    withdrawEth() {
        return "Transaction completed"
    }
}
const owner = new Owner("zeneca.eth", 1.55)
// Текущий экземпляр.  __proto__ это аналог Object.getPrototypeOf()
console.log(owner)
// Прототип оунера
console.log(owner.__proto__)
// Прототип юзера
console.log(owner.__proto__.__proto__)
// Прототип Object
console.log(owner.__proto__.__proto__.__proto__)
// null
console.log(owner.__proto__.__proto__.__proto__.__proto__)