const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const autprefixer = require('gulp-autoprefixer');
const useref = require('gulp-useref'), uglify = require('gulp-uglify')
    , cssnano = require('gulp-cssnano'), gif = require('gulp-if');

gulp.task('copia', ['limpa'], () => {
    return gulp.src('src/**/*').pipe(gulp.dest('build'));
});

gulp.task('limpa', () => {
    return del('build');
});

gulp.task('sass', ['copia'], () => {
    return gulp.src('build/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/css/'));
});

gulp.task('prefixa', ['sass'], () => {
    return gulp.src('build/css/**/*.css')
        .pipe(autprefixer({
            browsers: ['Firefox>=29', 'Chrome>=42', 'IE>=10']
        }))
        .pipe(gulp.dest('build/css/'));
});

gulp.task('minifica', ['prefixa'], () => {
    return gulp.src('build/**/*.html').pipe(useref())
        .pipe(gif('*.js', uglify()))
        .pipe(gif('*.css', cssnano()))
        .pipe(gulp.dest('build'));
})