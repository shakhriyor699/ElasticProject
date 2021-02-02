global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    path: {
        tasks: require('./gulp/config'),
        serverDir: './app/build',
        src: {
            html: './app/src/*.{html,pug,jade}',
            style: './app/src/styles/*.*',
            js: './app/src/script/*.js',
            img: './app/src/images/**/*.{png,jpg,gif}',
            fonts: './app/src/fonts/**/**/*.*'
        },
        build: {
            html: './app/build/',
            style: './app/build/styles/',
            js: './app/build/script/',
            img: './app/build/images/',
            fonts: './app/build/fonts/'
        },
        watch: {
            html: ['./app/src/*.{html,pug,jade}', './app/src/view/**/*.{html,pug,jade}'],
            style: './app/src/styles/**/*.*',
            js: './app/src/script/**/*.*',
            img: './app/src/images/**/*.{png,jpg,gif}',
            fonts: './app/src/fonts/**/*.*'
        }
    },
    tasks: {
        default: ['html', 'style', 'js', 'img', 'fonts', 'watch', 'serve'],
        build: ['html', 'style', 'js', 'img', 'fonts']
    }
}

$.path.tasks.forEach(taskPath => require(taskPath)())

for(const val in $.tasks) {
    $.gulp.task(val, $.gulp.series($.gulp.parallel(...$.tasks[val])))
}