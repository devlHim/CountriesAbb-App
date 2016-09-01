app.directive('countriesApp', function(){
	return {
		restrict: 'E',
		scope: {
			listing: '='
		},
		templateUrl: 'js/directives/countriesApp.html'
	}	
});