var Url = require("./models").Url

Url.create ({
  long: "http://veryLongUrl.com/longer",
  short: "http://short.com",
  timestamp: Date.now()
}).then(url => {
  console.log(url)
})
