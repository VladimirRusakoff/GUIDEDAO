const punk7804 = {
    owner: "0xf4b4a",
    type: "Alien"
}
const punk8857 = {
    type: "Zombie",
    accessories: "3D Glasses"
}
const megaPunk = {...punk7804, ...punk8857}
console.log(megaPunk)
//
const joinLoot = (rare, common) => {
    return {...common, ...rare}
}
const rare = {
    head: "Ornate Helm of Rage"
}
const common = {
    head: "Linen Hood",
    chest: "Chain Mail",
    weapon: "Grave Wand"
}
console.log(joinLoot(rare, common))
//
const getRarityScore = (loot) => {
    const {bag, score} = loot
    return `Мешок #${bag} имеет ${score} очков редкости.`
}
console.log(getRarityScore({bag: 6189, score: 164.41}))
//
const getRarityScoreRank = (loot) => {
    const {bag, score, rank = 0} = loot
    return `Мешок #${bag} имеет ${score} очков редкости и занимает ${rank} место в рейтинге.`
}
console.log(getRarityScoreRank({bag: 6189, score: 164.41, rank: 2372}))
console.log(getRarityScoreRank({bag: 7498, score: 40.39}))
// Опциональная цепочка 1
const dao = {
    members: {
        founder: {
            address: "0xaf45b3"
        }
    },
    treasury: null
}
let address = dao.members?.founder?.address
/*if (dao.members && dao.members.founder && dao.members.founder.address){
    address = dao.members.founder.address
}*/
console.log(address)
console.log(dao.treasury?.value)
console.log(dao.proposals?.template)
console.log(dao.members?.staff?.count)
//
const getBalance = wallet => wallet.ethereum?.balance
console.log(getBalance({ethereum: {balance: "0.2 ETH"}}))
console.log(getBalance({ethereum: null}))
console.log(getBalance({}))
//
const getNonce = tx => tx.receipt?.details?.nonce
console.log(getNonce({hash: 0x54b7ad, success: false}))
console.log(getNonce({hash: 0xa8fe4b, success: true, receipt: {details: {nonce: 12}}}))
// Опциональная цепочка 2
const data = {
    gasFees: [20, 45, 67, 33]
}
let firstValue = undefined
if (data.gasFees) {
    firstValue = data.gasFees[0]
}
// выше равносильно ниже
const firstValue2 = data.gasFees?.[0]
console.log(firstValue2)
//
const tx12 = {
    nonce: 432,
    status: "success"
}
let upperCasedStatus = tx12.status // Может быть undefined
if (tx12.status) {
    upperCasedStatus = tx12.status.toUpperCase()
}
console.log(upperCasedStatus)
// выше равносильно ниже
const upperCasedStatus12 = tx12.status?.toUpperCase()
//
const sum1122 = values => {
    return values?.[0] + values?.[1]
}
console.log(sum1122([2,3]))
console.log(sum1122([]))
//
//settings?.theme = "dark" // error
//
const getFirstCall = tx => tx.receipt?.calls?.[0]
//
const getBalance1122 = wallet => wallet.ethereum?.balance?.toUpperCase()
console.log(getBalance1122({ethereum: {balance: "0.2 eth"}}))
console.log(getBalance1122({ethereum: null}))
console.log(getBalance1122({}))
// Нулевое слияние 1
const getAddress = address => address ?? "wagmi.eth"
console.log(getAddress("mcs.eth"))
console.log(getAddress(null))
console.log(getAddress(undefined))
//
const getPlaceholder = () => {
    console.log("Вызов getPlaceholder")
    return "Anon"
}
const sayHello = name => `Hello ${name ?? getPlaceholder()}`
console.log(sayHello("Vitalik"))
console.log(sayHello())
// 
const getBalance111 = address => address.balance ?? "N/A"
console.log(getBalance111({balance: 42}))
console.log(getBalance111({}))
//
const getGreeting99 = user => {
    return `Привет, ${user.name ?? "аноним"}`
}
console.log(getGreeting99({name: "Виталик"}))
console.log(getGreeting99({}))
// Нулевое слияние 2
const address2233 = dao.members?.founder?.address ?? "N/A"
//
const network = {
    chainId: 1
}
const url = "https://" + network.url ?? ""
console.log(url)
//
const nerwork1 = {
    chainId: 1
}
const url1 = "https://" + (network.url ?? "")
console.log(url1)
//
const getChainId = network => {
    return network.info?.chainId ?? 0
}
console.log(getChainId({info: { chainId: 31337}}))
console.log(getChainId({info: null}))
console.log(getChainId({}))
//
const getTxValue = tx => tx.details?.value?.eth ?? "N/A"
console.log(getTxValue({hash: 0x1, success: false}))
console.log(getTxValue({hash: 0x2, success: true, details: {value: {eth: 0.2}}}))
//
const getNetworkName = network => {
    return network.info?.name?.toLowerCase() ?? "network"
}
console.log(getNetworkName({info: {name: "Rinkeby"}}))
console.log(getNetworkName({info: null}))
console.log(getNetworkName({}))
// Рефакторинг условий
const getPushNotification = status => {
    const notifications = {
        received: "Ресторан готовит заказ.",
        prepared: "Передаем заказ курьеру.",
        picked: "Курьер скоро будет у вас!",
        arrived: "Заказ доставлен!"
    }

    return notifications[status] ?? "Статус неизвестен"
}
console.log(getPushNotification("received"))
//
const getTxStatus = tx => {
    const txes = {
        pending: "Ожидаем подтверждения от сети.",
        confirmed: "Пробуем выполнить транзакцию.",
        candeled: "Не удалось выполнить транзакцию.",
        success: "Транзакция выполнена успешно!"
    }

    return txes[tx.status] ?? "Статус транзакции недоступен"
    
}
const tx1 = {status: "pending"}
console.log(getTxStatus(tx1)) // Ожидаем подтверждения от сети.
const tx2 = {status: "success"}
console.log(getTxStatus(tx2)) // Транзакция выполнена успешно!
// Приведение типов
const string = "stonks"
const number = 0
if (string) {
    console.log("Строка в условии")
}
if (number) {
    console.log("Число в условии")
}