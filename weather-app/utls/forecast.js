const request = require('request')

const forecast = (lat, long, callback) => {
  const url = 'https://api.darksky.net/forecast/2904859521320b3653c6c9c69a7f900c/' + encodeURIComponent(lat) + ',' + encodeURIComponent(long)
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service.', undefined)
    } else if (response.body.error) {
      callback('Unable to find location', undefined) 
    } else {
      let data = {
        summary: response.body.daily.data[0].summary,
        temp: response.body.currently.temperature,
        precipPercent: response.body.currently.precipProbability
      }
      callback(undefined, data)
    }
  })
}

module.exports = forecast