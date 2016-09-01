app.factory('countries', ['$http', function($http) { 
  return $http.get('https://raw.githubusercontent.com/astockwell/countries-and-provinces-states-regions/master/countries.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);

