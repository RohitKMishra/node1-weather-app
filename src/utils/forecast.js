const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/2caaa378d52c55509fd409a867fa714d/'+ latitude+','+longitude + '?units=si&lang=es'

    request({url, json: true},(error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.currently.temperature + 'degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    } )

}

module.exports = forecast