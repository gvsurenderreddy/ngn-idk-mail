// Include NGN (locally)
var assert = require('assert');

UTIL.testing = true;

/**
 * Make sure the NGN Utilities namespace is available.
 */
suite('IDK Mail Sanity Test', function(){

  var lib = null;

  // Basic Sanity Tests
  test('NGN.mail.Message exists.', function(){
    assert.ok(NGN.mail.Message !== undefined,'NGN.mail.Message load failure.');
  });
  test('NGN.mail.Attachment exists.', function(){
    assert.ok(NGN.mail.Attachment !== undefined,'NGN.mail.Attachment load failure.');
  });

});