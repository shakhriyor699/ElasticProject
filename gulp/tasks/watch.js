module.exports = () => 
    $.gulp.task('watch', () => {
        for(const key in $.path.watch) {
            const pathWath = $.path.watch[key]
            $.gulp.watch(pathWath, $.gulp.series(key))
        }
    })