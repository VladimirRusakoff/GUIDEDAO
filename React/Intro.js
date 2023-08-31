const numbers = [{
    id: 1, number: 10
}, {
    id: 2, number: -6
}, {
    id: 3, number: 22
}]
// фильтр для всех number больше 10
const moreThanTen = numbers.filter(el => el.number > 10)
console.log(moreThanTen.length)
//
function createCard() {
    const card = document.createElement("div")
    card.className = "card";
    return card
}
console.log(createCard())