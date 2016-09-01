var app = angular.module('CountriesApp', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider 
    .when('/',{
          controller : 'CountriesController',
          templateUrl:'views/countriesApp.html'
    })
  .when('/:id',{
        controller :'DetailController',
    templateUrl :'views/detail.html'
  })
  .otherwise({
    redirectTo :'/'
  })
  
})


