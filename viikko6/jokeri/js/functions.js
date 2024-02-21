const displayedNumbers = document.querySelector('table')
const numberOfRows = document.querySelector('p')

const addNewRowOfNumbers = () => {
    const newNumbers = newRandomNumbers()
    addTableRow(newNumbers)
}

const addTableRow = (numbers) => {
    const row = displayedNumbers.insertRow()
    for (let i = 0; i < numbers.length; i++) {
        const col = row.insertCell(i)
        col.innerHTML = numbers[i]
    }
}

const newRandomNumbers = () => {
    const numbers = []
    for (let i = 0; i < 7; i++) {
        numbers.push(Math.floor(Math.random() * 9) + 1)
    }
    return numbers
}

const updateNumberOfRows = () => {
    const rows = displayedNumbers.rows.length
    numberOfRows.innerHTML = `Valmiita rivejä: ${rows}`
}

document.querySelector('button').addEventListener('click', () => {
    addNewRowOfNumbers()
    updateNumberOfRows()
})