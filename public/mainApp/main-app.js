var mainModule = angular.module('mainApp', [
  'ngRoute'
]);

mainModule.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'pages/main-template.html',
      controller: 'MainCtrl'
    })
    .when('/sample', {
      templateUrl: 'pages/mainApp-templates/sample.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
});