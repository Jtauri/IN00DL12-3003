const sekInput = document.querySelector('input')
const euroOutput = document.querySelector('output')
const rateSpan = document.querySelector('span')
const convertButton = document.querySelector('button')
const url = 'https://api.freecurrencyapi.com/v1/latest'

const apiKey = 'fca_live_AJqV4oT9SyWJyRJypFl9gZUUfiI0aPFbjbQEMk7K'
baseCurrency = 'SEK'

convertButton.addEventListener('click', () => {
    const address = `${url}?base_currency=${baseCurrency}&apikey=${apiKey}`
    fetch(address)
        .then(response => response.json())
        .then(json => {
            const rate = json.data.EUR
            rateSpan.innerHTML = rate
            const sek = sekInput.value
            const eur = sek * rate
            euroOutput.innerHTML = eur.toFixed(2) + ' €'
        })
        .catch(error => {
            alert('Error: ' + error)
        })
})

