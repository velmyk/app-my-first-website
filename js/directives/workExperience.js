app.directive('workExperience', function() {
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'js/directives/workExperience.html'
	};
});