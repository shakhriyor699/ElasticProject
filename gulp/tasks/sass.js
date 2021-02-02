module.exports = () => 
    $.gulp.task('style', () => 
        $.gulp.src($.path.src.style)
            .pipe($.gp.sass({ outputStyle: 'expended' }))
            .pipe($.gp.autoprefixer())
            .pipe($.gp.groupCssMediaQueries())
            .pipe($.gp.sass({ outputStyle: 'compressed' }))
            .pipe($.gp.rename('main.min.css'))
            .pipe($.gulp.dest($.path.build.style)).on('end', $.bs.reload)
    )