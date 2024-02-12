const button = document.querySelector('button')
const input = document.querySelector('input')
const output = document.querySelector('output')


button.addEventListener('click', () => {
    const sek = Number(input.value)
    const eur = sek * 0.089
    output.innerHTML = eur.toFixed(2)
    })