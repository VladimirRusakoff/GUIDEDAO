// статические методы
class Punk {
    static getTotalSupply() {
        const totalSupply = 10000
        return totalSupply
    }
}
console.log(Punk.getTotalSupply())
//
class Course {
    constructor(name, isCompleted) {
        this.name = name
        this.isCompleted = isCompleted
    }

    markCompleted() {
        this.isCompleted = true
        return this
    }

    setGrade(grade) {
        this.grade = grade
        return this
    }

    getCertificate() {
        this.issueCertificate = true
        return this
    }
}

const course = new Course("Solidity", false)
console.log(course.markCompleted().setGrade(5).getCertificate())
//
class Halving {
    constructor(totalSupply) {
        this.totalSupply = totalSupply
    }

    cutSupply() {
        if (Halving.getVote()) {
            this.totalSupply /= 2
        }
    }

    static getVote() {
        return Math.random() <= 0.5 // Вероятность 50% на true
    }
}
console.log(Halving.getVote())
const halving = new Halving(1000000)
halving.cutSupply()
console.log(halving.totalSupply)
//
class TokenSale {
    constructor() {
        this.amount = 1000
        this.toke = "CRV"
        this.inWhitelist = false
    }

    addToWhitelist() {
        this.inWhitelist = true
        this.amount *= 10
        return this
    }

    setToken(symbol) {
        this.token = symbol
        return this
    }

    applyBoost(percent) {
        this.amount += this.amount / 100 * percent
        return this
    }
}
const tokenSale = new TokenSale
tokenSale.addToWhitelist().setToken("CVX").applyBoost(5)
console.log(tokenSale.amount) // 10500
// наследование
class Member {
    constructor(pseudonym, address) {
        this.pseudonym = pseudonym
        this.address = address
    }

    getPseudonym() {
        return this.pseudonym
    }

    getAddress() {
        return this.address
    }
}
class Founder extends Member {
    vote() {
        console.log(`Ваши голаса засчитаны!`)
    }
}
const founder = new Founder("PennilessWassie", "0x9c50…dac5")
founder.vote() 
console.log(founder.getPseudonym())
console.log(founder.getAddress())
// переопределение наследуемых методов
class Founder2 extends Member {
    getPseudonym() {
        return `${this.pseudonym} (founder)`
    }

    vote() {
        console.log(`Ваши голаса засчитаны!`)
    }
}
const founder2 = new Founder2("PennilessWassie", "0x9c50…dac5")
console.log(founder2.getPseudonym())
//
class User {
    constructor(name, balance) {
        this.name = name
        this.balance = balance
    }

    getAddress() {
        return this.name
    }

    getBalance() {
        return this.balance
    }
}
class Owner extends User {
    getAddress() {
        return `${this.name} [owner]`
    }

    withdrawEth() {
        console.log("Transaction completed")
    }
}
const user = new User("shitty.eth", 7.85)
console.log(user.getBalance())
console.log(user.getAddress())
//
const owner = new Owner("zeneca.eth", 1.55)
console.log(owner.getBalance()) // 1.55
console.log(owner.getAddress()) // "zeneca.eth [owner]"
owner.withdrawEth() // "Transaction completed"
//
class VC {
    constructor(investor, money) {
        this.investor = investor
        this.money = money
    }

    getDeal() {
        console.log(`${this.investor} привлекли ${this.money}м долларов`)
    }
}
class Multicoin extends VC {
    getInvestor() {
        return "Multicoin Capital"
    }
}
class Dragonfly extends VC {
    getInvestor() {
        return "Dragonfly Capital"
    }
}
const ceramic = new Multicoin("Ceramic Network", 30)
ceramic.getDeal() // "Ceramic Network привлекли 30м долларов"
console.log(ceramic.getInvestor()) // "Multicoin Capital"

const gelato = new Dragonfly("Gelato Network", 11)
gelato.getDeal() // "Gelato Network привлекли 11м долларов"
console.log(gelato.getInvestor())  // "Dragonfly Capital"
//
class Member123 {
    constructor(pseudonym, address) {
        this.pseudonym = pseudonym
        this.address = address
    }

    getPseudonym() {
        return this.pseudonym
    }

    getAddress() {
        return this.address
    }
}
class Founder123 {
    constructor(pseudonym, address, votes) {
        this.pseudonym = pseudonym
        this.address = address
        this.votes = votes
    }

    getPseudonym() {
        return this.pseudonym
    }

    getAddress() {
        return this.address
    }

    vote() {
        console.log(`${this.votes} голосов засчитано!`)
    }
}
class Founder1234 extends Member {
    constructor(pseudonym, address, votes) {
        super(pseudonym, address)
        this.votes = votes
    }

    vote() {
        console.log(`${this.votes} голосов засчитано!`)
    }
}
//
class User456 {
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
class Owner456 extends User {
    constructor(address, balance, role) {
        super(address, balance)
        this.role = role
    }

    getAddress() {
        return `${this.address} [${this.role}]`
    }
    
    withdrawEth() {
        return "Transaction completed"
    }
}
