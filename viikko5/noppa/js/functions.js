document.querySelector('#diceImg').addEventListener('click', function(event) {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    event.target.src = './img/' + randomNumber + '.svg'
});


