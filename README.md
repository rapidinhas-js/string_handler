# String Handler Package - string_handler

> Apology Note

- I apologize to those who downloaded the package and could not use it, I made a mistake when uploading the version to NPM and did not contain the entire implementation of Handler.

---

> Description

- This package contains a simple string handler for mapping and manipulating data, object arrays, and strings. I'm implementing more methods over time, if anyone has tips send me through GitHub.
  - GitHub: https://github.com/rapsjs/string_handler

> Instructions

- Install this package

``npm i string_handler``

- Object Array To String - for map and object array to a single string use this method:

```javascript

const strHandler = require('string_handler/lib/string');


// Data to example
const object = [{ text: 'Text' }, { text: 'here' }, { text: 'please.' }]
const propertyName = 'text'
const separator = '| or space or , or whatever ypu want';

/*
  Call method 'objectArrayToString' and pass the three args
  First the Object array, and second the Property Name to
  be mapped as string and third the separator for join
*/

str.objectArrayToString(object, propertyName, separator)

// Method return: 'Text here please'
```