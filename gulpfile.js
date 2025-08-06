const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const svgstore = require("gulp-svgstore");
const rename = require("gulp-rename");

gulp.task("build:icons", () => {
	return gulp.src("nodes/**/*.svg").pipe(imagemin()).pipe(svgstore()).pipe(rename("icons.svg")).pipe(gulp.dest("dist"));
});
