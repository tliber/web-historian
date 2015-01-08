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



module.exports.response = response = function(res, statusCode){

  res.writeHead(statusCode, helpers.headers);
  res.end('<input');

};

module.exports.handleRequest = function (req, res) {
   // console.log(archive.paths);
   // console.log('path', path);
   var path = archive.paths.archivedSites  + req.url;
   console.log(path);
  if (archive.paths.archivedSites){
    // if (req.method === 'GET'){
    //   archive.isUrlInList(req.url, function(bool){
    //     if (bool){
    //       response(res, 200);
    //       //serve page
    //     }
    //     else{
    //      archive.addUrlToList(req, url);

    //       //loading page gif
    //     }
    //   });

      response(res, 200)
      }
    // }else if (req.method === 'POST'){
    //   response(res, 201)
    // } else if (req.method === 'OPTIONS'){
    //   response(res, 500)
    // }

     else {
      response(res,404);
    }
};


