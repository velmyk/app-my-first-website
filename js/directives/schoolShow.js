app.directive('schoolShow', function() {
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'js/directives/schoolShow.html'
	};
});
