const users = [{ id: 1, name: "Nick Szabo"}, {id: 2, name: "Gavin Wood"}]
const csv = users.map(user => user.name).join(", ")
console.log(csv)

const html = `<ul>${users.map(user => `<li>${user.name}</li>`).join("")}</ul>`
console.log(html)

function renderTableRows(rows) {
    console.log(rows)
    // Пишите код решения здесь
    return rows.map(row => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("")
  }
console.log(renderTableRows([["Bitcoin", 47311], ["Ethereum"], []]))

const getDropdown = currencies => {
    return `<option value="">Выберите валюту</option>
    ${currencies
        .map(
            (currency) => 
                `<option value="${currency.toLowerCase()}">${currency}</option>`
        )
        .join("")}`
}
console.log(getDropdown(["Bitcoin", "Etherium", "Doge"]))