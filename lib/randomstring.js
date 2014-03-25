var baseChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz';

/**
 * Generates a unique string, optionally skipping characters (ie: to avoid ambiguous looking ones)
 *
 * @param {int} length
 * @param {string | Array} [skipChars] - Characters that you don't want to appear in the generated string
 * @returns {string}
 */
exports.generate = function(length, skipChars) {
  length = length ? length : 32;

  var chars = baseChars;

  // If we want to omit some characters, let's remove them from the available chars.
  if (skipChars !== undefined) {
    // Convert arrays into flat strings
    if (typeof skipChars === 'object') {
      skipChars = skipChars.join('');
    }
    for (var x = 0; x < skipChars.length; x++) {
      chars = chars.replace(skipChars.charAt(x), '');
    }
  }

  var string = '';
  
  for (var i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    string += chars.substring(randomNumber, randomNumber + 1);
  }
  
  return string;
}