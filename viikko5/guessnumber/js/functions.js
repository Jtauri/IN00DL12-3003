document.querySelector('button').addEventListener('click', () => {
    const input = document.querySelector('input')
    const guess = Number(input.value)
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (guess === randomNumber) {
        alert('Arvasit oikein!')
    } else {
        alert('Arvasit väärin, oikea numero oli ' + randomNumber)
    }

    input.value = ''
    input.focus()
})
