var gulp = require('gulp');
var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var streamify = require('gulp-streamify');
var fs = require('fs');
require('shelljs/global');


var regs = {
    title: new RegExp(/title:(.*)/),
    date: new RegExp(/date:(.*)/),
    categories: new RegExp(/categories:(.*)/),
    path: new RegExp(/path:(.*)/)
}

function buildTool(){
    var result = [];
    var stream = through.obj(function(file, enc, cb){
        if(file.isBuffer()){
            var [meta, content] = String(file.contents).split('---');
            result.push({
                title: meta.match(regs.title)[1].trim(),
                date: meta.match(regs.date)[1].trim(),
                categories: meta.match(regs.categories)[1].trim().replace(/\"/g, ''),
                pre: content.split('<!--more-->')[0].trim(),
                path: meta.match(regs.path)[1].trim()
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

gulp.task('build', () => {
    rm('-rf', 'dist/md');
    return gulp.src('./src/md/**/*.md')
    .pipe(buildTool())
    .pipe(gulp.dest('dist/md'));
})
