var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function (err) {
    throw err;
  })
  .on('response', function (response) {
    console.log('Downloading image...');
    console.log('Response code: ', response.statusCode);
    console.log('Response message: ', response.statusMessage);
    console.log('Content type: ', response.headers['content-type']);
    console.log('Download complete.')
  })
  .on('end', function (end) {
    console.log('Readable stream complete.');
  })
  .pipe(fs.createWriteStream('./future.jpg'));