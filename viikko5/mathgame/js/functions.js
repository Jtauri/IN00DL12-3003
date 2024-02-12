'use strict'

let randNum1 = 0
let randNum2 = 0
let wrongAnswers = 0
let rightAnswers = 0

const input = document.querySelector('input')

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * max + min)
}

const setRandomNumbers = () => {
    randNum1 = getRandomNumber(1, 10)
    randNum2 = getRandomNumber(1, 10)
    document.querySelector('#num1').innerHTML = randNum1
    document.querySelector('#num2').innerHTML = randNum2
}

addEventListener("DOMContentLoaded", () => {
    updateUI()
})

const updateUI = () => {
    setRandomNumbers()
    document.querySelector('#wrongAnswers').innerHTML = wrongAnswers
    document.querySelector('#rightAnswers').innerHTML = rightAnswers
    input.focus()
    input.value = ''
}

document.querySelector('button').addEventListener('click', () => {
    if (randNum1 + randNum2 === Number(input.value)) {
        alert('Oikein!')
        rightAnswers++
    }
    else {
        alert('Väärin!')
        wrongAnswers++
    }
    updateUI()
})




