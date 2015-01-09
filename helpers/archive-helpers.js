var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var handler = require('../web/request-handler')
/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = readListOfUrls = function(cb){

  var stream = '';
  var filestream = fs.createReadStream('./archives/sites.txt');
  filestream.on('data', function(data){
    stream += data;
  })

  filestream.on('end', function(){
  var listOfUrls = stream.split('\\n')
  cb(listOfUrls);
  })

};

exports.isUrlInList = function(url,cb){
  readListOfUrls(function(list){
    if (list.indexOf(url) > -1){
     cb(true);
    } else {
     cb(false);
    }
  })
};

exports.addUrlToList = addUrlToList =function(req, targetUrl){
  var tester = targetUrl;
  fs.appendFile('./archives/sites.txt',tester ,function(err){
    if(err){
      console.log("Woah there is an error!", err);
    }
    else{
      console.log('appended' + targetUrl + 'to ur database file');
    }
  });
};

exports.isURLArchived = function(site){
  var sitesToScrape = '';
  var sitesDone = '';
  fs.readFile('./archives/scrapedUrls.txt', function(err, dataDone){
    if(err){
      console.log(err)
      // handler.response()
    } else {
      fs.readFile('../archives/sites.txt', function(err, data){
        if(err){
      // console.log(err)
        } else {
          console.log(data + 'DATA');
          var sitesDone = (dataDone + sitesDone).split(',');
          var sitesToScrape = (data).toString().split(',');
          console.log(sitesToScrape);
        }
      });

      //redirect to file
      // for (var i = 0; i < sitesDone.length;i++){
        // if()
      // }
    }

  })
};

exports.downloadUrls = function(){

};
