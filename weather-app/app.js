// npm init -y
const geocode = require('./utls/geocode')
const forecast = require('./utls/forecast')

// const url = 'https://api.darksky.net/forecast/2904859521320b3653c6c9c69a7f900c/37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service')
//   } else if (response.body.error) {
//     console.log('Unable to find location')
//   } else {
//       // const data = JSON.parse(response.body)
//       // console.log(data.currently)
//       // 'json: true' makes parsing redundant
//     let currentWeather = (response.body.currently)
//     console.log(response.body.daily.data[0].summary + ` It is currently ` + currentWeather.temperature + ' degrees out. There is a ' + currentWeather.precipProbability + '% chance of rain.')
//   }
// })

// Geocoding
// Address -> Lat/Long -> Weather

// const laURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamFja3lmZW5nNTMwIiwiYSI6ImNrN3k1MmdpbjAzaHMza3IycXBicWRvcDEifQ.VrdZ9gPqdotXscBxn7ty-Q&limit=1'

// request({ url: laURL, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to location services')
//   } else if (response.body.features.length === 0) {
//     console.log('Unable to find location. Try again.')
//   } else {
//     const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]
//     console.log('Latitude: ' + latitude + ' Longitude: ' + longitude)
//   }
// })

geocode('Boston', (error, data) => {
  if (error) {
    console.log('Error: ', error)
  }
  console.log('Data: ', data)
})

forecast(-75.7088, 44.1545, (error, data) => {
  if (error) {
    console.log('Error: ', error)
  }
  console.log(data.summary + ` It is currently ` + data.temp + ' degrees out. There is a ' + data.precipPercent + '% chance of rain.')
})