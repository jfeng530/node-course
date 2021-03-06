const request = require('request')
const dotenv = require('dotenv')
dotenv.config()


const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/` + encodeURIComponent(address) + `.json?access_token=${process.env.MAP_API}&limit=1`
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services.', undefined)
    } else if (response.body.features.length === 0) {
      callback('Unable to find location. Try again.', undefined)
    } else {
      let data = {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      }
      callback(undefined, data)
    }
  })
}

module.exports = geocode