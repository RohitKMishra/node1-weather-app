const request = require('request')

const geocode = (address, callback) => {                          // encodeURIComponent(address)                                     
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address + '.json?access_token=pk.eyJ1Ijoicm9oaXRtaXNocmEiLCJhIjoiY2szdTI5Z3VnMDhnNjNlcTg5NmlvcWNjaSJ9.ht_4vPtDg-638w44UJU71A'

request({url, json: true}, (error, {body}) => {
    if (error) {
        callback('Unable to connect to ,location service!', undefined)
    } else if(body.features.length == 0) {
        callback('Unable to find location. Try another search', undefined)
    } else {
        callback(undefined, {
            latitude: body.features[0].center[1],
            longitude: body.features[0].center[0],
            location: body.features[0].place_name
        })
    }
})
}

module.exports = geocode
