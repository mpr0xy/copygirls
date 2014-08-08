var request = require('request')
  , cheerio = require('cheerio')
  , async = require('async')
  , format = require('util').format;

var reddits = [ 'programming', 'javascript', 'node' ]
  , concurrency = 2;

var url = 'http://pp.163.com/balalapure/pp/13136005.html'
request(url, function (err, response, body) {
    if (err) throw err;
    var $ = cheerio.load(body);
    $('img.z-tag.data-lazyload-src').each(function () {
        console.log('%s', $(this).attr('data-lazyload-src'));
    });
});