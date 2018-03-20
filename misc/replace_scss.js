var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var path = require('path');
var glob = require('glob');
var async = require('async');

var rootTmpDir = path.resolve(__dirname, '../tmp');

/**
 * Replace SCSS styleUrls references
 */
glob(path.join(rootTmpDir, '**/*.ts'), function(err, matches) {
    console.log(matches);
    if (err) {
        console.log(error);
        return;
    }

    async.each(matches, function(filename, callback) {

        fs.readFileAsync(path.join(filename))
        .then(function(file) {
            return file.toString().replace(/(?:styleUrls[\s]*:[\s]*)[\s]*\[.*(?:\.scss)+.*\]/g, function(match) {
                console.log('Replaced scss reference in file %s (%s)', filename, match);
                return match.replace('.scss', '.css');
            })
        })
        .then(function(content) {
            return [filename, content];
        })
        .spread(fs.writeFileAsync)
        .then(function() {
            callback();
        });

    }, function(err) {
        // if any of the file processing produced an error, err would equal that error
        if( err ) {
            // One of the iterations produced an error.
            // All processing will now stop.
            console.log('A file failed to process');
            console.log(err);
        } else {
            console.log('All files have been processed successfully');
        }
    });

});


