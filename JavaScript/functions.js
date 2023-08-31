function sum(x,y) {
    return x + y
}

function stringLength(stri) {
    return stri.length
}

/*let text = "JavaScript"
console.log(text.toLowerCase())
console.log(text.toUpperCase())
console.log(text[0])
console.log(text[1])
console.log(text[2])
console.log(text[text.length-2])
console.log(text.substring(5))
console.log(text.substring(5,7))*/
// 
/*let first = "Gleb"
let second = "Kostin"
let name = first + " " + second 
console.log(name)
let name1 = "Gleb"
name1 += " Kostin"
console.log(name1)
// шаблонные строки
let multiline = `Это одна
шаблонная строка
длинной в ${1+2} строчки`
console.log(multiline)
let language = "JavaScript"
console.log(`Я учу ${language}`)*/
//
/*let solo = 322
console.log(solo.toString()) // "322"
// NaN
console.log("str"*3)
// convert string to int
let s111 = "777"
console.log(Number.parseInt(s111, 10))
console.log(Number.parseInt("123abc", 10))
console.log(Number.parseInt("4 сыра", 10))*/
// переменные
/*let artist = "Boulevard Depo"
console.log(artist)
let game = "StarCraft"
game = "Axie Infinity"
console.log(game)*/
// условия
const savage = 20
if (savage < 21) {
    console.log("Недобор баллов")
} else if (savage === 21) {
    console.log("Проходной балл")
} else {
    console.log("Перебор баллов")
}

function isSupercentenarian(age) {
    /*if (age >= 110) {
        return true
    } else {
        return false
    }*/
    return age >= 110
}

console.log(isSupercentenarian(145))

