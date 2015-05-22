'use strict';
// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var flljudgingApp = angular.module('flljudgingApp', ['ngRoute']);
	
	
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
            .when('/nominations', {
                templateUrl : 'pages/nominations.html',
                controller  : 'nominationsController'
            })
			// route for the rankings page
            .when('/rankings', {
                templateUrl : 'pages/rankings.html',
                controller  : 'rankingsController'
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

    flljudgingApp.controller('nominationsController', function($scope) {
        $scope.message = 'The nominations form will go here.';
		
    });
    flljudgingApp.controller('rankingsController', function($scope) {
        $scope.message = 'The rankings form will go here.';
		
    });
    flljudgingApp.controller('adminController', function($scope) {
        $scope.message = 'The admin form will go here.';
		
    });
	
	flljudgingApp.controller('RubricForm', function ($scope, $http) {
    $scope.selectedTeam = null;
    $scope.teams = [];
	$scope.selectJudgingPanel = null;
    $scope.judgingpanels = [];
    $scope.rubricQuestions = [];
	
	console.log($scope.selectJudgingPanel);
	console.log($scope.selectedTeam);
	
		$http({	
			method: 'GET',
			url: '/data/teams.json',
			data: { applicationId: 3 }
			}).success(function (result) {
			$scope.teams = result;
			});
		$http({
			method: 'GET',
			url: '/data/judgingpanels.json',
			data: { applicationId: 3 }
			}).success(function (result) {
			$scope.judgingpanels = result;
			});
		$http({
			method: 'GET',
			url: '/data/questions.json',
			data: { applicationId: 3 }
			}).success(function (result) {
			$scope.rubricQuestions = result;
			});
	});