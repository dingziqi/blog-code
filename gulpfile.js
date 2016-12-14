var gulp = require('gulp');
var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var streamify = require('gulp-streamify');
var fs = require('fs')


var regs = {
    title: new RegExp(/title:(.*)/),
    date: new RegExp(/date:(.*)/),
    categories: new RegExp(/categories:(.*)/)
}


function buildTool(){
    var result = [];
    var stream = through.obj(function(file, enc, cb){
        if(file.isBuffer()){
            var contents = String(file.contents).split('---');
            result.push({
                title: contents[0].match(regs.title)[1].trim(),
                date: contents[0].match(regs.date)[1].trim(),
                categories: contents[0].match(regs.categories)[1].trim().replace(/\"/g, ''),
                pre: contents[1].split('<!--more-->')[0]
            })
        }

        this.push(file);
        cb();
    })

    stream.on('end', ()=>{
        fs.writeFile('./dist/cat.json', JSON.stringify(result));
    })

    return stream;
}

gulp.task('build', ()=>{
    return gulp.src('./dist/md/**/*.md')
    .pipe(buildTool())
})
