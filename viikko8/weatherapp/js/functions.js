const tempSpan = document.querySelector('#temp')
const windSpeedSpan = document.querySelector('#windSpeed')
const windDirectionSpan = document.querySelector('#windDirection')
const description = document.querySelector('#description')
const iconImg = document.querySelector('img')


const url = 'https://api.openweathermap.org/data/2.5/weather?'
const iconUrl = 'http://openweathermap.org/img/wn/'
const apiKey = ''

const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            document.querySelector('#lat').innerHTML = position.coords.latitude.toFixed(3) + ', '
            document.querySelector('#lon').innerHTML = position.coords.longitude.toFixed(3)
            getWeather(position.coords.latitude, position.coords.longitude)
        }, error => {
            alert('Error: ' + error)
        }, { timeout: 10000 })
    } else {
        alert('Geolocation is not supported by this browser.')
    }
}

const getWeather = (lat, lon) => {
    const address = url + 'lat=' + lat + '&lon=' + lon + '&units=metric&appid=' + apiKey
    axios.get(address)
        .then(response => {
            const json = response.data
            tempSpan.innerHTML = json.main.temp + '&#8451;'
            windSpeedSpan.innerHTML = json.wind.speed + ' m/s'
            windDirectionSpan.innerHTML = json.wind.deg + '&deg;'
            descriptionString = json.weather[0].description
            descriptionString = descriptionString.charAt(0).toUpperCase() + descriptionString.slice(1)
            description.innerHTML = descriptionString
            const image = iconUrl + json.weather[0].icon + '@2x.png'
            iconImg.src = image
        }).catch(error => {
            alert('Error: ' + error)
        })
}

getLocation()

