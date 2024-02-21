const primaryNumbers = document.querySelector('#numbers')
const luckyNumbers = document.querySelector('#luckyNumbers')
const randomNumbers = []

const newRandomNumbers = () => {
    const numbers = []
    for (let i = 0; i < 9; i++) {
        while (true) {
            const number = Math.floor(Math.random() * 37 + 1)
            if (!numbers.includes(number)) {
                numbers.push(number)
                break
            }
        }
    }
    return numbers
}

randomNumbers.push(...newRandomNumbers()) // Spread operaattori jakaa taulukon alkioiksi. Oishan nuo voinut suoraan kyl tunkea sinne jo funktiossa?

const addPrimaryNumbers = () => {
    addTableRow(randomNumbers, 0, primaryNumbers)
}

const addLuckNumbers = () => {
    addTableRow(randomNumbers, 7, luckyNumbers)
}

const addTableRow = (numbers, index, chosenNumbers) => {
    const row = chosenNumbers.insertRow()
    for (let i = index; i < numbers.length; i++) {
        const col = row.insertCell(i-index)
        col.innerHTML = numbers[i]
    }
}


addPrimaryNumbers()
addLuckNumbers()
