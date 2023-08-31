// пустой массив
/*const meebits = []
// массив чисел
const cryptoPunks = [7804, 3100, 5217, 7252]
// массив строк
const lootItems = ["Amulet of Titans", "Cap of Brilliance"]
// смешанный массив
const nfts = [2140, false, "Gloves of Protection"]

console.log(nfts)
console.log(nfts.length)
// добавление нового элемента массива
cryptoPunks.push(2140)
console.log(cryptoPunks)
// 
const newArr = []
newArr.push(7804)
console.log(newArr.length)
newArr.push(3100)
console.log(newArr.length)
// 
console.log(cryptoPunks)
cryptoPunks.forEach(function(punk) {
    console.log(punk)
})*/

/*const users = ["bantg", "tracheopteryx", "cobie"]
users.forEach(function(user) {
    console.log(user)
})

const currencies = ["ETH", "DAI", "UST"]
currencies.forEach(function(currency) {
    console.log(currency)
})

function sumBags(bags) {
    let sum = 0
    bags.forEach(function(bag){
        sum += bag
    })
    return sum
}

console.log(sumBags([3043, 7658, 5046, 949]))

function sumSomeBags(bags) {
    let sum = 0
    bags.forEach(function(bag) {
        if (bag.toString().length === 4) {
            sum += bag
        }
    })
    return sum
}

console.log(sumSomeBags([6109, 52, 2422, 625]))

function sum0ddBags(bags) {
    let sum = 0
    bags.forEach(function(bag) {
        if (bag % 2 === 1) {
            sum += bag
        }
    })
    return sum
}

console.log(sum0ddBags([6109, 52, 2422, 625]))

function getDropdown(currencies) {
    let html = `<option value="">Выберите валюту</option>`;
    currencies.forEach(function(currency) {
        html += `<option value="${currency.toLowerCase()}">${currency}</option>`;
    });
    return html;
}

console.log(getDropdown(["Bitcoin", "Ethereum", "Tether", "Solana"]))

function renderTableRows(rows) {
    let html = ""
    rows.forEach(function(row) {
        html += `<tr>
                    <td>${row[0]}</td>
                    <td>${row[1]}</td>
                </tr>`
    })
    return html
}

const arrTokens = [["Bitcoin", "47311"], ["Ethereum", "3407"], ["Solana", "163"], ["Tether", "1"]]
console.log(arrTokens[0][1])
console.log(renderTableRows(arrTokens))*/

let numbers = [9, 5, 14, 3, 11]
let numbersAboveTen = numbers.filter(function(number) {
    return number >= 10
})

console.log(numbersAboveTen)
let numbersAllElements = numbers.filter(function(number) {
    return true
})
console.log(numbersAllElements)

function getAboveZero(temperatures) {
    return temperatures.filter(function(temperature) {
        return temperature < 0//> 0
    })
}

console.log(getAboveZero([-5, 12, 3]))

let testnets = ["Ropsten", "Kovan", "Rinkeby", "Goerli"]
let result = testnets.find(function(testnet) {
    return testnet === "Rinkeby"
})
console.log(result)

function getLoot(bags, searchBag) {
    return bags.find(function(bag) {
        return bag === searchBag
    })
}
console.log(getLoot([6969, 1, 1337, 420], 4200))

function getOddLoot(bags) {
    return bags.filter(function(bag) {
        return bag % 2 
    })
}
console.log(getOddLoot([234, 45, 2656, 5]))

const numbers1 = [1, 2, 3, 4]
const races = ["Zerg", "Protoss", "Terran"]
const doubled = numbers.map(function(numb) {
    return numb * 2
})
const tags = races.map(function(race) {
    return race[0];
})
console.log(doubled)
console.log(tags)

console.log(numbers1.includes(3))
console.log(races.join(""))
console.log(races.join("_"))
console.log(races.join("::"))
console.log(races.toString())

function isTxIncluded(bk, tx) {
    return bk.includes(tx)
}
console.log(isTxIncluded(["0xaea0", "0x8f80", "0xf3ad", "0x17ec"], "0x9e0a"))
console.log(isTxIncluded(["0x912f", "0x8d19", "0x20ba"], "0x8d19")) // true

function getSizes(words) {
    return words.map(function(word) {
        return word.length
    })
}
console.log(getSizes(["Moscow", "Coding", "School"])) // [6, 6, 6]

function getWithSpaces(strings) {
    const joined = strings.join(" ")
    return [joined, joined.length]
}
console.log(getWithSpaces(["Moscow", "Coding", "School"])) // ["Moscow Coding School", 20]