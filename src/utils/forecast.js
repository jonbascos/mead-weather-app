const request = require("request")

const forecast = (long, lat, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=a7a0384d14228c13f92d068f35ad91b2&query=${lat},${long}&units=f`

  request({ url, json: true }, (error, response) => {
    const {
      error: dataError,
      weather_descriptions,
      temperature,
      feelslike,
    } = response.body.current
    if (dataError) {
      callback("Unable to access the weather service", undefined)
    } else if (error) {
      callback("Unable to find location", undefined)
    } else {
      callback(
        undefined,
        `${weather_descriptions[0]} - It is currently ${temperature} degrees outside.  It feels like ${feelslike} degrees though.`
      )
    }
  })
}

module.exports = forecast
