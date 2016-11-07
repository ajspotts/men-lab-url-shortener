var mongoose = require("./connection")

var UrlSchema = mongoose.Schema({
  short: String,
  long: String,
  timestamp: Date,
})

var Url = mongoose.model("Url", UrlSchema)

module.exports = {Url: Url}
