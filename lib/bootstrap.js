global.NGN = {};
module.exports = function(ngn){
  NGN = ngn;

  var mail = NGN.mail || {}
      p = require('path'),
      path = p.join(__dirname,'mail');

  // Return all the first level classes in the directory.
  require('fs').readdirSync(path).forEach(function(file){
    mail[p.basename(file,'.js')] = require(p.join(path,file));
  });

  return {mail:mail};
};