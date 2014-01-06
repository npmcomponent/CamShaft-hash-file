*This repository is a mirror of the [component](http://component.io) module [CamShaft/hash-file](http://github.com/CamShaft/hash-file). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/CamShaft-hash-file`.*
hash-file
=========

MD5 a file in the browser using the FileReader api

Installation
------------

```sh
$ component install CamShaft/hash-file
```

API
---

```js
var md5 = require('hash-file');

document
  .getElementById("file")
  .addEventListener("change", function() {
    var file = this.files[0];
    md5(file, function (err, hash) {
      console.log(hash);
      // 30b78548aae224e09290778216310053be
    })
  });
```

## License

MIT
