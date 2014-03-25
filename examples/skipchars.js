var rs = require('../lib/randomstring');

var noAmbiguousLettersByString = rs.generate(32, 'ilIoO0');

console.log('By String:', noAmbiguousLettersByString);

var noAmbiguousLettersByArray = rs.generate(32, ['i','l','I','o','O','0']);

console.log('By Array:', noAmbiguousLettersByArray);

