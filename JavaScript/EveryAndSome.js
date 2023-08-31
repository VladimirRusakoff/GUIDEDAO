const levels = [5.6, 6.9, 3.5, 4.7, 6.3]
const allSafe = levels.every(lvl => lvl < 7) // true
console.log(allSafe)
const allElevated = levels.every(lvl => lvl > 7) // false
console.log(allElevated)
const someLow = levels.some(lvl => lvl < 4) // true
console.log(someLow)
const someTooLow = levels.some(lvl => lvl < 3) // false
console.log(someTooLow)

const needOtrabotka = grades => grades.some(grade => grade < 3)
console.log(needOtrabotka([3, 4, 5, 3]))
console.log(needOtrabotka([4, 2, 3, 5]))

const allFromMoscow = codes => codes.every(code => code === 495)
console.log(allFromMoscow([495, 495, 495]))
console.log(allFromMoscow([812, 495, 351]))
// удаление элементов
const scam = ["$ADA", "$XRP", "$EOS"]
scam.length = 0
console.log(scam)
// .splice(n) - удаляет все элементы, начиная с n-ного символа
// .splice(n, m) - удаляет m элементов, начиная с n-ного символа
const tokens = ["$ADA", "$XRP", "$EOS"]
const firstItem = tokens.splice(0, 1) // удаляет первый элемент массива и присваивает его переменной firstItem
console.log(tokens)
console.log(firstItem)
//
const resetUser = roles => roles.length = 0
const user = ["Admin", "Moderator"]
resetUser(user)
console.log(user)

const demoteUser = roles => {
    roles.splice(0, 1)
    return roles
}
const user2 = ["Admin", "Moderator", "Editor"]
console.log(demoteUser(user2))
console.log(demoteUser(user2))

const removeSecondary = roles => {
    roles.splice(1)
    return roles
}
const user3 = ["Admin", "Moderator", "Editor"]
console.log(removeSecondary(user3))
// редуцирование .reduce() посчитать одно значение на основе массива
const nums = [2, 4, 3]
console.log(nums.reduce((acc, cur) => {
    return acc + cur
}, 0)) // 9
console.log(nums.reduce((acc, cur) => acc + cur, 0))
console.log(nums.reduce((acc, cur) => acc * cur, 1))
//
let numbs = [10, 5, 15, 20]
let sum = numbs.reduce((acc, cur) => {
    console.log(`Аккумулятор: ${acc}`)
    console.log(`Текущее значение: ${cur}`)
    console.log("-----------------------")
    return acc + cur
}, 0)
console.log(`Итоговая сумма: ${sum}`)
// 
let punks = [3100, 7804, 5217, 8857]
let ssum = punks.reduce((acc, cur) => acc + cur, 0)
console.log(ssum)
//
const sumPunks = punks => punks.reduce((acc, cur) => acc + cur, 0)
console.log(sumPunks([3100, 7804, 5217, 8857]))
console.log(sumPunks([2140, 7252, 2338, 6275]))
//
const multiplyPunks = punks => punks.reduce((acc, cur) => acc * cur, 1)
console.log(multiplyPunks([3100, 7804]))
console.log(multiplyPunks([2140, 7252, 2338]))
// Деструктуризация массивов
const block = [13335416, 355]
const blockHeight = block[0]
const totalTxt = block[1]
console.log(blockHeight)
console.log(totalTxt)
const [blockHeight1, totalTxt1] = block
console.log(blockHeight1)
console.log(totalTxt1)
console.log("---------------")
const getBlockReport = block => {
    const [blockHeight, totalTxs] = block
    return `Блок номер ${blockHeight} содержит ${totalTxs} транзакций.`
}
console.log(getBlockReport([9585604, 110]))
console.log(getBlockReport([12585603, 185]))
//
const getMinerInfo = block => {
    const [miner, time] = block
    return `Этот блок замайнил ${miner} за ${time} секунд`
}
console.log(getMinerInfo(["Nanopool", 25]))
console.log(getMinerInfo(["Ethermine", 11]))
// Когкатенация массивов
const weapon = ["Wand of Vitriol"]
const chest = ["Dragonskin Armor"]
const gear = [...weapon, ...chest]
console.log(gear)
//
const loot = ["Amulet", "Helm"]
const extraLoot = [...loot, "Pandemonium Moon"]
console.log(extraLoot)
//
const joinAssets = (wallet1, wallet2) => [...wallet1, ...wallet2]
console.log(joinAssets(["21 IFY", "18 AAVE"], ["32 MATIC", "73 CRV"]))