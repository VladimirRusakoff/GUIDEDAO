const sum = (a,b) => {
    a + b
}
console.log(sum(1,2))

const sum2 = (a,b) => a + b
console.log(sum2(1,2))

const isHighRated = (imdbScore) => {
    return imdbScore > 8
}
const isHighRated2 = imdbScore => imdbScore > 8
console.log(isHighRated(10))
console.log(isHighRated2(5))

const triple = value => value * 3
console.log(triple(3))

const multiply = (a,b) => a * b
console.log(multiply(9,3))

const indbScores = [8.2, 6.3, 8.8, 5.8, 9.1]
const getHighRated = indbScores.filter(function(indbScore) {
    return indbScore > 8
})
const getHighRated1 = (indbScores) => indbScores.filter(indbScore => indbScore > 8)
console.log(getHighRated1(indbScores))

const testnets = ["Ropsten", "Kovan", "Rinkeby", "Goerli"]
const result = testnets.find(testnet => testnet === "Rinkeby")
console.log(result)

const numbers = [1, 2, 3, 4]
const doubled = numbers.map(number => number * 2)
console.log(doubled)

const getTopRetweets = retweets => retweets.filter(retweet => retweet > 100)
console.log(getTopRetweets([2, 234, 21, 620]))

const getLowRetweets = retweets => retweets.filter(retweet => retweet < 10)
console.log(getLowRetweets([2, 23, 4, 62]))

const getTwitterHandle = (users, searchUser) => users.find(user => user === searchUser)
console.log(getTwitterHandle(["@kyled116", "@dhof", "@karl_dot_tech"], "@kyled116"))
console.log(getTwitterHandle(["@ukolodny", "@punk4156", "@iamDCinvestor"], "@cdixon"))

const getUsernameLengths = users => users.map(user => user.length - 1)
console.log(getUsernameLengths(["@kyled116", "@dhof", "@karl_dot_tech"]))
console.log(getUsernameLengths(["@ukolodny", "@punk4156", "@iamDCinvestor"]))
