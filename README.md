# node-randomstring

## Installation
    
To install randomstring, use [npm](http://github.com/isaacs/npm):

    $ npm install randomstring

## Usage

```javascript
var randomstring = require("randomstring");

// Generate a random string of length 32 (default)
randomstring.generate();
// >> "XwPp9xazJ0ku5CZnlmgAx2Dld8SHkAeT"

// Generate a random string of length 7
randomstring.generate(7);
// >> "xqm5wXX"

// Generate a random string of length 6 and skip any characters that could be ambiguous with certain fonts
randomstring.generate(6, 'ilIoO0');
// >> "ZQ1gWV"
```

## LICENSE

node-randomstring is licensed under the MIT license.