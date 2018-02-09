// File that contains all routes for the application
// The routes can be converted to modules when angular-modules are implemented
flljudging.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/home', {
    redirectTo: '/'
  })
  .when('/judging/:type', {
    templateUrl: 'judging/judging.view.html',
    controller: 'JudgingFormController',
    controllerAs: 'judgingForm'
  })
  .when('/', {
    templateUrl: 'base/home.view.html',
    controller: 'HomeController',
    controllerAs: 'home'
  })
  .otherwise({
    redirectTo: '/'
  });
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');
}]);
