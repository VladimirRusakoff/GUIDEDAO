const assets = [
    {
        id: 1,
        slug: "bitcoin",
        symbol: "BTC",
        creator: {
            firstName: "Satoshi",
            lastName: "Nakamoto",
            avatarUrl: null
        }
    },
    {
        id: 2,
        slug: "ethereum",
        symbol: "ETH",
        creator: {
            firstName: "Vitalik",
            lastName: "Buterin",
            avatarUrl: "https://pbs.twimg.com/profile_images/977496875887558661/L86xyLF4_400x400.jpg"
        }
    }
]

assets.forEach(asset => {
    console.log(asset)
    console.log(asset.creator.firstName)
})
//
const getNumberOfMessageCalls = tx => tx.length
const tx = [{
    calldata: "0x095ea7",
    delegatecall: false
  }, {
    calldata: "c8b201a1",
    delegatecall: true
  }]
console.log(getNumberOfMessageCalls(tx))
//
const logNames = users => {
    users.forEach(user => {
        console.log(`${user.firstName} ${user.lastName}`)
    })
}
const sampleUsers = [{
    id: 1,
    firstName: "Satoshi",
    lastName: "Nakamoto"
}, {
    id: 2,
    firstName: "Vitalik",
    lastName: "Buterin"
}]
logNames(sampleUsers)
//
const getBlockGasUsed = block => {
    sum = 0
    block.forEach(blo => {
        console.log(blo)
        sum += blo.gasLimit
    })
    return sum / block.length
}
const block15034336 = [{
    gasLimit: 120678,
    gasUsed: 120678 
  }, {
    gasLimit: 48594,
    gasUsed: 29328
  }, {
    gasLimit: 145026,
    gasUsed: 96684
  }]
  
  console.log(getBlockGasUsed(block15034336)) // 246690
  //
  const getTotalFeesPaid = block => {
    let sum = 0
    block.forEach(tx => sum += tx.gas.gasFees.feePaid)
    return sum
  }
  const block15034523 = [{
    gas: {
      gasFees: {
        gasPrice: 50.1,
        feePaid: 2.52
      },
      gasLimit: 120000,
      gasUsed: 41309
    },
    value: 0
  }, {
    gas: {
      gasFees: {
        gasPrice: 50.1,
        feePaid: 1.28
      },
      gasLimit: 90000,
      gasUsed: 21000
    },
    value: 98.21
  }]
  
  console.log(getTotalFeesPaid(block15034523)) // 3.8
  // Трансформация
  const names = ["Satoshi", "Vitalik"]
  const upperNames = names.map(name => name.toUpperCase())
  console.log(upperNames)
  //
  const assets11 = [
    {
      id: 1,
      slug: "bitcoin",
      symbol: "BTC"
    },
    {
      id: 2,
      slug: "ethereum",
      symbol: "ETH"
    }
  ]
  const slugs = assets.map(asset => asset.slug)
  console.log(slugs)
  //
  const getDeposits = stakers => stakers.map(stak => stak.deposits)
  const stakers = [{
    entity: "Lido",
    deposits: 4138464,
    validators: 129327
  }, {
    entity: "Kraken",
    deposits: 837184,
    validators: 26162
  }]
  console.log(getDeposits(stakers))
