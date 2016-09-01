app.controller('DetailController',['$scope','countries','$routeParams',function($scope, countries, $routeParams){
	countries.success(function (data) {
		$scope.detail = data[$routeParams.id];
	});
}]);


