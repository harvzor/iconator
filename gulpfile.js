var gulp = require('gulp');

var src = {
	packageContents: './Content/App_Plugins/**/*'
};

var config = require('./config.json');

// Packs files for a nuget deploy.
gulp.task('moveToUmbraco', function() {
	gulp.src(src.packageContents)
		.pipe(gulp.dest(config.packageCopyToDir));
});

gulp.task('watch', function() {
	gulp.watch(src.packageContents, ['moveToUmbraco']);
});

gulp.task('default', ['moveToUmbraco', 'watch']);

