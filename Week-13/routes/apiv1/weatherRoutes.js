const https = require("https")


const apiKey = "faa9462230e2b5331bc2394dbe168047"
const location = "Lucknow"
const api = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + apiKey;
const api1 = "https://bulk.openweathermap.org/snapshot/weather_14.json.gz?" + "&appid=" + apiKey;
const api3 = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=" + 44.34 + "&lon=" + 10.99 + "&cnt=" + 10 + "&appid=" + apiKey;


exports.specificLocation = (req, res) => {
  https.get(api, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data)
      res.send(weatherData)
    })
  });
}

exports.bulkFetch = (req, res) => {
  https.get(api1, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data)
      res.send(weatherData)
    })
  });
}


exports.nextTenDays = (req, res) => {
  https.get(api3, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data)
      res.send(weatherData)
    })
  });
}