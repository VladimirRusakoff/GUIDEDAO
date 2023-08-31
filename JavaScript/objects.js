const block = {
    height: 13272801,
    transactions: 452,
    minedBy: "Spark Pool",
    reward: 2.4811,
    stateRoot: "0xaa8f4"
}
block.height += 1

console.log(block.height)

function getAnimeDetails() {
    const detail = {
        title: "",
        episodes: 10,
        ongoing: false
    }
    return detail
}

console.log(getAnimeDetails())

function getEpisodes(anime) {
    return `Аниме ${anime.title} включает ${anime.episodes} серий`
}
console.log(getEpisodes({title: "Code Geass", episodes: 25}))

function removeOpening(episode) {
    episode.opening = !episode.opening
    return episode
}
console.log(removeOpening({number: 23, opening: true}))

function renderTableRow(details) {
    return `<tr>
            <td>${details.title}</td>
            <td>${details.price}</td>
        </tr>`
}

function addOne(number = 0) {
    return number + 1
}
console.log(addOne(5))
console.log(addOne())

function welcomeUser(name = "user") {
    return `Hello ${name}`
}
console.log(welcomeUser("Vitalik"))
console.log(welcomeUser())

function sum(a = 0, b = 0) {
    return a + b
}
console.log(sum())
console.log(sum(1,15))
