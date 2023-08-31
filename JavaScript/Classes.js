class Token {
    constructor(ticker) {
        // Привязка параметра конструктора к переменной экземпляра
        this.ticker = ticker
    }

    isStableCoin() {
        // Возвращает true, если тикер является стейблкоином
    }

    isFiatCoin() {
        // Возвращает true, если тикер относится к фиатным валютам
    }
}

const firstToken = new Token("FTM")
firstToken.isStableCoin() 
//
class Token1 {
    constructor(supply) {
        this.supply = supply
    }
}
const mintToken = () => {
    return new Token1(10)
}
//
class Wallet {
    constructor(address, balance) {
        this.address = address
        this.balance = balance
    }
}
const createWallet = (a, b) => {
    return new Wallet(a,b)
}
// конструктор класса
class Account {
    constructor(address, balance) {
        console.log(`Счет ${address} создан с балансом ${balance}`)
    }
}
const account = new Account("0x0000", 100)
//
class Account2 {
    constructor(address, balance, nonce) {
        this.address = address
        this.balance = balance
        this.nonce = nonce
    }
}
// Методы экземпляров
class Account3 {
    constructor(address, balance) {
        this.address = address
        this.balance = balance
    }

    getBalance() {
        return `Баланс: ${this.balance}`
    }
}
const acc = new Account3("0x0000", 1000)
console.log(acc.getBalance())
//
class Transaction {
    constructor(value, isFinalized) {
      this.value = value
      this.isFinalized = isFinalized
    }
    
    getDetails() {
      if(this.isFinalized) {
        return `Перевод ${this.value} wei завершен!`
      } else {
        return "Транзакция в процессе..."
      }
    }
  }
  const firstTx = new Transaction(100, true)
  console.log(firstTx.getDetails()) // Перевод 100 wei завершен!
  const secondTx = new Transaction(999, false)
  console.log(secondTx.getDetails()) // Транзакция в процессе...
  //
  class Punk {
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    getId() {
        return `#${this.id}`
    }

    isAlien() {
        return this.name == "Alien"
    }
  }
const punk3100 = new Punk(3100, "Alien")
console.log(punk3100.getId()) // "#3100"
console.log(punk3100.isAlien()) // true
const punk5217 = new Punk(5217, "Ape")
console.log(punk5217.getId()) // "#5217"
console.log(punk5217.isAlien()) //
// возможность использовать одних методов экземпляра внутри других в классе
class Punk1 {
    constructor(id, price) {
        this.id = id
        this.price = price
    }

    getId() {
        return `#${this.id}`
    }

    printPrice() {
        return `Панк ${this.getId()} стоит ${this.price} ETH.`
    }
  }
const punk31001 = new Punk1(3100, 4200)
console.log(punk31001.printPrice()) // "Панк #3100 стоит 4200 ETH."
// Сеттеры и геттеры
class Punk2 {
    constructor(id) {
        this.id = id
    }

    get id() {
        console.log("Сработал геттер id")
        return this._id
    }

    set id(value) {
        console.log("Сработал сеттер id")
        this._id = Number.parseInt(value, 10)
    }
}
const punk = new Punk2("3100")
console.log(punk.id)
punk.id = "6529"
console.log(punk.id)
//
class Tasks {
    constructor(todos) {
        this._todos = todos
    }

    get todos() {
        return this._todos.join(", ")
    }
}
const tasks = new Tasks(["Выспаться", "Попробовать Zwift"])
console.log(tasks.todos)
//
class Transaction123 {
    constructor(amount) {
        this.amount = amount
    }

    get amount() {
        return this._wei
    }
    set amount(value) {
        this._wei = value * 1000000000000000000
    }
}
const tx = new Transaction123(1.5)
console.log(tx.amount) // 1500000000000000000
tx.amount = 2
console.log(tx.amount) // 2000000000000000000