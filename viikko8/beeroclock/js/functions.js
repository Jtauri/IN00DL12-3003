// Define variables for handling UI elements
const brandElement = document.querySelector('#brand')
const nameElement = document.querySelector('#name')
const styleElement = document.querySelector('#style')

// Url variable holds the value for the backend API
const apiUrl = 'https://random-data-api.com/api/v2/beers'

// Declare getData function which uses fetch-then structure to retrieve data
const getData = () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(json => {
            brandElement.innerHTML = json.brand
            nameElement.innerHTML = json.name
            styleElement.innerHTML = json.style
        }).catch(error => {
            alert('Error: ', error)
        })
}


// Call getData function when JavaScript is executed (when page is opened and JavaScript is loaded)
getData()