var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var handler = require('../web/request-handler');
var $ = require('../node_modules/jquery/dist/jquery.js').ajax;
// var ajax =  require('../node_modules/ajax/lib/ajax.js');
var http = require('http');
// var path = require('./path');
// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.s



exports.htmlFetcher = function(siteName){
  var fileIndex = '';
  newSiteName = 'http://' + siteName;
  http.get(newSiteName, function(res){
    res.on('data',function(data){
       fileIndex += data;
    });
    res.on('end', function(){
      fs.writeFile(archive.paths.archivedSites + '/' + siteName, fileIndex,{}, function(err){
        if (err){
          console.log(err);
        }else{
          console.log("should HAVE the SITE");
          archive.isURLArchived();
        };
      });
      fs.appendFile('./archives/scrapedUrls.txt', ',' + siteName, function(err){
        if(err){
          console.log(err)
        }
      });
    });

  });

  // console.log(path.basename);
};








  // $.ajax({
  //   url : siteName,
  //   dataType : 'text/html',
  //   success : function(data){
  //     var site = $('html').html(data);
  //   }
  // })
