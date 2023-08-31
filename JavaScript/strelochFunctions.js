// стрелочные функции
const sum = (a, b) => {
    return a + b
}
// то же самое
const sum1 = function(a, b) {
    return a + b
}

const tripl = (value) => {
    return value * 3
}
console.log(tripl(3))

// стрелочные колбэки
const glucoseChecks = [5.4, 8.1, 6.3, 4.9]

glucoseChecks.forEach(function(glucoseCheck) {
    console.log(glucoseCheck)
})
console.log("стрелочная функция")
glucoseChecks.forEach((glucoseCheck) => {
    console.log(glucoseCheck)
})
console.log("можно убрать скобки в glucoseCheck")
glucoseChecks.forEach(glucoseCheck => {
    console.log(glucoseCheck)
})

// тоже самое для метода .filter
const glucoseSpikes = glucoseChecks.filter(glucoseCheck => {
    return glucoseCheck > 7.5
})
console.log(glucoseSpikes)

const getAvgGlucose = (checks) => {
    let sum = 0
    checks.forEach(check => {
        sum += check
    })
    const avg = sum / checks.length
    return +avg.toFixed(1)
}
console.log(getAvgGlucose(glucoseChecks))

const getDropdown = (currencies) => {
    console.log(currencies)
    let html = `<option value="">Выберите валюту</options>`
    currencies.forEach(currency => {
      html += `<option value="${currency.toLowerCase()}">${currency}</option>`
    })
    return html
  }

  const getGlucoseSpikes = (checks) => {
    return checks.filter(check => {
        return check > 7.5
    })
  }
  console.log(getGlucoseSpikes([4.2, 8.5, 6.6, 9.1, 5.0]))
