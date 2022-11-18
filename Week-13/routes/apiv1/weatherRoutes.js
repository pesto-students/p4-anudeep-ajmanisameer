const https = require("https")
const apiKey = process.env.API_KEY
const location = "Lucknow"
// const api = `${process.env.API_ONE} + ${location} + "&appid=" + ${apiKey};`
const api = process.env.API_ONE + location + "&appid=" + apiKey
const api1 = process.env.API_TWO + "&appid=" + apiKey;
const api3 = process.env.API_THREE + 44.34 + "&lon=" + 10.99 + "&cnt=" + 10 + "&appid=" + apiKey;

// gets you the weather report of specific location
exports.specificLocation = (req, res) => {
  console.log("here", apiKey)
  https.get(api, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data)
      res.send(weatherData)
    })
  });
}


// gets dump collection of cities with it's weather data
exports.bulkFetch = (req, res) => {
  https.get(api1, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data)
      res.send(weatherData)
    })
  });
}


// gets weather report of specific city for the next 10Days
exports.nextTenDays = (req, res) => {
  https.get(api3, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data)
      res.send(weatherData)
    })
  });
}