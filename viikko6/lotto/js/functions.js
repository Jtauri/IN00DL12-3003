const primaryNumbers = document.querySelector('#numbers')
const luckyNumbers = document.querySelector('#luckyNumbers')
const numbers = []
const plusNumbers = []

const newRandomNumbers = () => {
    const newNumbers = []
    for (let i = 0; i < 9; i++) {
        while (true) {
            const number = Math.floor(Math.random() * 37 + 1)
            if (!newNumbers.includes(number)) {
                newNumbers.push(number)
                break
            }
        }
    }
    return newNumbers
}

const drawNewNumbers = () => {
    for (let i = 6; i < 8; i++) {
        plusNumbers.push(numbers[i])
        numbers.splice(i, 1)
    }
    numbers.sort((a, b) => a - b)
    plusNumbers.sort((a, b) => a - b)
    addTableRow(numbers, primaryNumbers)
    addTableRow(plusNumbers, luckyNumbers)
}

const addTableRow = (showNumbers, chosenNumbers) => {
    const row = chosenNumbers.insertRow()
    for (let i = 0; i < showNumbers.length; i++) {
        const col = row.insertCell(i)
        col.innerHTML = showNumbers[i]
    }
}

numbers.push(...newRandomNumbers())
drawNewNumbers()