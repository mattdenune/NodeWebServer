const request = require('postman-request');


const forecast = (longitude, latitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=bd3261008503a17797e8570d8dfa32f7&query=${latitude},${longitude}&units=f`
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`)
        }
    })
}

module.exports = forecast;