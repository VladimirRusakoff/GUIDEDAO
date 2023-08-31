const name = "   Beeple Crap"
console.log(name.trim())

const sentence = "Non-fungible token"
console.log(sentence.startsWith("Non"))
console.log(sentence.startsWith("Non-f"))
console.log(sentence.startsWith("en"))

console.log(sentence.endsWith("token"))

console.log(sentence.includes("ungible"))

const getTwitterHandle = twitterHandle => {
    if (twitterHandle.startsWith("@")) {
        return twitterHandle
    }
    return `@${twitterHandle}`
}
console.log(getTwitterHandle("@kyled116"))
console.log(getTwitterHandle("hasufl"))

const getCurrency = price => {
    if (price.includes("$")) {
        return "Доллар"
    }
    else if (price.includes("€")) {
        return "Евро"
    }
    return "Недоступно"
}
console.log(getCurrency("$100"))
console.log(getCurrency("5€"))
console.log(getCurrency("30 USD"))

let rollups = "Arbitrum,Optimism,Startware"
console.log(rollups.split(","))

const kampai = "За ростовскую братву!"
console.log(kampai.replace(" ", "_"))
console.log(kampai.replaceAll(" ", "_"))

const getSlug = title => title.substring(0,15).toLowerCase().replace(" ", "-")
console.log(getSlug("Shill your bags"))
console.log(getSlug("We are all gonna make it"))

const getTodosNumber = todos => todos.split(",").length
console.log(getTodosNumber("Сдать пластик,Купить капучинатор,Пересадить аглаонему"))
