/**
 * Module dependencies
 */

var md5 = require('md5');

/**
 * Defines
 */

var CHUNK_SIZE = 2097152;

/**
 * Save the blob slice
 */

var blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

/**
 * MD5 the contents of a File
 *
 * @param {File} file
 * @param {Function} done
 * @api public
 */

module.exports = function(file, done) {
  var chunks = Math.ceil(file.size / CHUNK_SIZE)
    , currentChunk = 0
    , hash = new md5.ArrayBuffer();

  function onLoad(e) {
    hash.append(e.target.result);
    currentChunk++;

    if (currentChunk < chunks) return loadChunk();
    done(null, hash.end());
  };

  function loadChunk() {
    var fileReader = new FileReader();
    fileReader.onload = onLoad;
    fileReader.onerror = done;

    var start = currentChunk * CHUNK_SIZE
      , end = ((start + CHUNK_SIZE) >= file.size) ? file.size : start + chunkSize;

    fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
  };

  loadChunk();
};
