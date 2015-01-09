var fs = require('fs');
var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers.js');
var url = require('url');
var paths = {
  '/': true
};
// require more modules/folders hervare!

module.exports.readFile = readFile = function(site){
      // if catch is complete

        //retrun site

      //else return loading page
};



module.exports.response = response = function(res, statusCode, data){
  data = data || '<input';
  res.writeHead(statusCode, helpers.headers);
  res.end(data);

};

module.exports.handleRequest = function (req, res) {
    if (req.method === 'POST'){
      var inputStream = '';
      req.on('data', function(data){
        inputStream += data;
      });

      req.on('end', function(){
          var targetUrl = inputStream.substring(4) + '';
          archive.isUrlInList(targetUrl, function(bool){
          if (bool){
            helpers.serveAssets(res, targetUrl, 302);
          } else{
           archive.addUrlToList(req, targetUrl);
           helpers.serveAssets(res, '../public/loading.html', 302);
          }
      });
      });


      }
    else if (req.method === 'GET'){
        var pathToFile = archive.paths.archivedSites  + req.url;
        if(req.url === '/'){
          pathToFile = './web/public/index.html'
        }
        helpers.serveAssets(res, pathToFile, 200)

    }

     else {
      response(res,404);
    }
};


