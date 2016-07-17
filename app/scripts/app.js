'use strict';
// script.js

	// also include ngRoute for all our routing needs
var flljudgingApp = angular.module('flljudgingApp', ['ngRoute','ui.sortable','ngDialog']);


// configure our routes
flljudgingApp.config(function($routeProvider) {
	$routeProvider
		// route for the home page
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})
		// route for the rubrics pages
		.when('/RubricsRD', {
			templateUrl : 'pages/rubrics.html',
			controller  : 'rubricsRDController'
		})
		.when('/RubricsPR', {
			templateUrl : 'pages/rubrics.html',
			controller  : 'rubricsPRController'
		})
		.when('/RubricsCV', {
			templateUrl : 'pages/rubrics.html',
			controller  : 'rubricsCVController'
		})
		// route for the nominations page
		.when('/NominationsPR', {
			templateUrl : 'pages/nominations.html',
			controller  : 'nominationsPRController'
		})
		.when('/NominationsRD', {
			templateUrl : 'pages/nominations.html',
			controller  : 'nominationsRDController'
		})
		.when('/NominationsCV', {
			templateUrl : 'pages/nominations.html',
			controller  : 'nominationsCVController'
		})
		// route for the rankings page
		.when('/RankingsPR', {
			templateUrl : 'pages/rankings.html',
			controller  : 'rankingsPRController'
		})
		.when('/RankingsRD', {
			templateUrl : 'pages/rankings.html',
			controller  : 'rankingsRDController'
		})
		.when('/RankingsCV', {
			templateUrl : 'pages/rankings.html',
			controller  : 'rankingsCVController'
		})
		// route for the admin page
		.when('/admin', {
			templateUrl : 'pages/admin.html',
			controller  : 'adminController'
		});
});
// create the controller and inject Angular's $scope
flljudgingApp.controller('mainController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});
flljudgingApp.controller('rubricsRDController', function($scope) {
	$scope.message = 'The Robot Design rubric will go here.';
	$scope.rubricCategory = 'Robot Design';
	$scope.rubricIcon = 'RobotDesign.png';
});
flljudgingApp.controller('rubricsPRController', function($scope) {
	$scope.message = 'The Project rubric will go here.';
	$scope.rubricCategory = 'Project';
	$scope.rubricIcon = 'Project.png';
});
flljudgingApp.controller('rubricsCVController', function($scope) {
	$scope.message = 'The Core Values rubric will go here.';
	$scope.rubricCategory = 'Core Values';
	$scope.rubricIcon = 'CoreValues.png';
});
flljudgingApp.controller('nominationsPRController', function($scope) {
	$scope.message = 'The project nominations will go here.';
	$scope.rubricCategory = 'Project';
	$scope.rubricIcon = 'Project.png';
});
flljudgingApp.controller('nominationsRDController', function($scope) {
	$scope.message = 'The robot design nominations will go here.';
	$scope.rubricCategory = 'Robot Design';
	$scope.rubricIcon = 'RobotDesign.png';
});
flljudgingApp.controller('nominationsCVController', function($scope) {
	$scope.message = 'The core values nominations will go here.';
	$scope.rubricCategory = 'Core Values';
	$scope.rubricIcon = 'CoreValues.png';
});
flljudgingApp.controller('rankingsPRController', function($scope) {
	$scope.message = 'The project rankings will go here.';
	$scope.rubricCategory = 'Project';
	$scope.rubricIcon = 'Project.png';
});
flljudgingApp.controller('rankingsRDController', function($scope) {
	$scope.message = 'The robot design rankings will go here.';
	$scope.rubricCategory = 'Robot Design';
	$scope.rubricIcon = 'RobotDesign.png';
});
flljudgingApp.controller('rankingsCVController', function($scope) {
	$scope.message = 'The core values rankings will go here.';
	$scope.rubricCategory = 'Core Values';
	$scope.rubricIcon = 'CoreValues.png';
});
flljudgingApp.controller('adminController', function($scope) {
	$scope.message = 'The admin form will go here.';
	
});