var Cron  = require('../node_modules/cron/lib/cron').CronJob;
var fs = require('fs');
var scrape = require('../workers/htmlfetcher');
// Sync is ok here because this is called just once on startup.
module.exports = function () {
  // if the archive folder doesn't exist, create it.
  // console.log(__dirname, 'DIRECPTRY');
  if (!fs.existsSync("./archives")) {
    // We use fs.mkdirSync to create the folder
    fs.mkdirSync("./archives");
  }

  // if the file doesn't exist, create it.
  if (!fs.existsSync("./archives/sites.txt")) {
    // We use fs.openSync to create the file
    var file = fs.openSync("./archives/sites.txt", "w");
    fs.closeSync(file);
  }

  // if the folder doesn't exist, create it.
  if (!fs.existsSync("./archives/sites")) {
    // We use fs.mkdirSync to create the folder
    fs.mkdirSync("./archives/sites");
  }
  scrape.htmlFetcher('www.google.com');
  var job = new Cron('25 * * * * *', function(s){
   console.log('hi')
  }, null, true, 'America/Los_Angeles');
};
