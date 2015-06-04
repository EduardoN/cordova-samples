/// <binding ProjectOpened='winjs' />
var gulp = require("gulp");

gulp.task("winjs", function () {
    gulp.src(["./bower_components/winjs/js/base.min.js"]).pipe(gulp.dest("./www/scripts/frameworks/"));
    gulp.src(["./bower_components/winjs/js/ui.min.js"]).pipe(gulp.dest("./www/scripts/frameworks/"));
    gulp.src(["./bower_components/winjs/css/ui-dark.css"]).pipe(gulp.dest("./www/css/"));
    gulp.src(["./bower_components/winjs/css/ui-light.css"]).pipe(gulp.dest("./www/css/"));
});
