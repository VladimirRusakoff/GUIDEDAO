const user = {
    id: 1, 
    name: "Nick Szabo"
}
console.log(user.id)

const usr = {
    id: 1,
    name: "Nick Szabo",
    age: 57
}
const key = "id"
console.log(usr[key])
//
const getValue = (user, key) => user[key]
console.log(getValue({id: 2, name: "Vitalik Buterin"}, "id")) // 2
console.log(getValue({id: 2, name: "Vitalik Buterin"}, "name")) //
//
const settings = {
    theme: "dark",
    version: "2.4.1",
    beta: false
}
const keys = Object.keys(settings)
console.log(keys) // ["theme", "version", "beta"]

keys.forEach(key => {
    console.log(settings[key])
})
//
const getObjectDetails = (obj, key) => `Значением ключа ${key} является ${obj[key]}`
console.log(getObjectDetails({id: 1, name: "Vitalik"}, "id"))
console.log(getObjectDetails({id: 1, name: "Vitalik"}, "name"))
//
const getNumberOfKeys = obj => Object.keys(obj).length
console.log(getNumberOfKeys({id: 1, name: "Vitalik",  country: "Canada"}))
console.log(getNumberOfKeys({id: 1, name: "Vitalik",  country: "Canada", website: "vitalik.ca"}))
//
const getCapsKeys = obj => Object.keys(obj).map(key => key.toUpperCase())
console.log(getCapsKeys({id: 1, name: "Vitalik",  country: "Canada"}))
// 
const logValues = obj => {
    Object.keys(obj).forEach(key => {
        console.log(obj[key])
    })
}
console.log(logValues({id: 1, name: "Vitalik",  country: "Canada"}))
//
const account = {
    nonce: 186,
    balance: 4032522415168559363
}
//console.log(account.codeHash.toUpperCase())
console.log(`Balance: ${account} WEI`)
//
const pudgyPenguin = {
    id: 1816,
    body: "Lab Coat",
    head: "Sombrero"
}
const values = Object.values(pudgyPenguin)
console.log(values) // [1816, "Lab Coat", "Sombrero"]
//
const entries = Object.entries(pudgyPenguin)
console.log(entries[0])
//
const getCapsValues = obj => {
    const val = Object.values(obj)
    return val.map(v => v.toUpperCase())
}
console.log(getCapsValues({body: "Lab Coat"})) // ["LAB COAT"]
//
const logEntries = obj => {
    console.log(Object.entries(obj))
}
logEntries({body: "Kimono Orange", head: "Backwards Hat Red"}) 
// короткая запись
const tps = 30
const blockchain = {
    name: "Ethereum",
    tps: tps
}
const blockchain1 = {
    name: "Ethereum",
    tps
}
const isAdmin = false
const darkMode = true
const settings123 = {
    isAdmin,
    darkMode
}
console.log(settings123)
//
const sum = (a,b) => {
    console.log({a})
    console.log({b})
    let total = a + b
    console.log({total})
    return total
}
console.log(sum(1,3))
//
const getAccount = (address, balance) => {
    return {address, balance}
}
console.log(getAccount())
//
const getResult = (a,b) => {
    console.log({a, b})
    let result = a * b
    console.log({result})
    return result
}
console.log(getResult(2,3))
// деструктуризация объектов
const config = {
    id: 1,
    isAdmin1: true,
    theme: {
        dark: true,
        zoom: false
    }
}
const {id, isAdmin1, theme} = config
console.log(`${id}::${isAdmin1}::${theme}`)
//
const account23 = {
    address: "0xFF9...13D7",
    type: "contract"
}
const {address, balance = 0} = account23
console.log(balance)
//
const type = "USB-C"
const account34 = {
    address12: "0xFF9...13D7",
    type: "contract"
}
const {type: accountType, address12} = account34
console.log(accountType)