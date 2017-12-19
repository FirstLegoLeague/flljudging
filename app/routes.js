// File that contains all routes for the application
// The routes can be converted to modules when angular-modules are implemented
flljudging.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'base/home.view.html',
    controller: 'HomeController',
    controllerAs: 'home'
  })
  .when('/home', {
    redirectTo: '/'
  })
  .otherwise({
    redirectTo: '/'
  });
  $locationProvider.html5Mode(true);
}]);
