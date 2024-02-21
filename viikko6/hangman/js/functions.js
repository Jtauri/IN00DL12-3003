const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')

const words = [
    "programming",
    "javascript",
    "computer",
    "keyboard",
    "mouse",
    "monitor",
    "laptop",
    "desktop",
    "framework",
    "library",
    "software",
    "hardware",
    "network",
    "internet",
    "database",
    "server",
]

let randomizedWord = ''
let maskedWord = ''
let numberOfGuesses = 0

const newGame = () => {
    const random = Math.floor(Math.random() * words.length)
    randomizedWord = words[random]
    maskedWord = "*".repeat(randomizedWord.length)
    console.log(randomizedWord)
    output.innerHTML = maskedWord
    numberOfGuesses = 0
    span.innerHTML = numberOfGuesses
}

newGame()

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault() //prevent form submission
        
        const guess = input.value
        if (guess.toLowerCase() === randomizedWord.toLowerCase()) {
            win()
        } else if (guess.length === 1) {
            replaceFoundChars(guess)
        }
        else {
            alert ("You guessed wrong! Try again.")
            numberOfGuesses++
            span.innerHTML = numberOfGuesses
        }
        input.value = ''
    }
})

const replaceFoundChars = (guess) => {
    for (let i = 0; i < randomizedWord.length; i++) {
     const char = randomizedWord.substring(i, i + 1)
     if (char===guess) {
      let newString =maskedWord.split('')
      newString.splice(i, 1, guess)
      newString = newString.join('')
        maskedWord = newString
     }
    }
    output.innerHTML = maskedWord
}

const win = () => {
    numberOfGuesses++
    alert('You have guessed right, the word was ' + randomizedWord + '. It took you ' + numberOfGuesses + ' guesses.')
    newGame()
}