app.directive('onlineCourse', function() {
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'js/directives/onlineCourse.html'
	};
});
