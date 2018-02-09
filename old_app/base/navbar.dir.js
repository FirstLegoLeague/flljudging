// Declares the navigation-bar directive for use of <navbar> in html
flljudging.directive('navbar', function() {
  return {
    templateUrl: 'base/navbar.view.html',
    controller: 'NavbarController',
    controllerAs: 'navbar'
  }
});
