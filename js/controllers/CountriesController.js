app.controller('CountriesController',['$scope', 'countries', function($scope, countries){
	countries.success(function (data){
		$scope.list = data;
	});
}]);