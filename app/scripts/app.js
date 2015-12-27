'use strict';
// script.js

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


flljudgingApp.controller('RubricForm', function ($scope, $http, $window) {
	
	//create the rubric object
	$scope.rubric = {};	
	$scope.selectedTeam = null;
	$scope.teams = [];
	$scope.selectJudgingPanel = null;
	$scope.judgingpanels = [];
	$scope.rubricQuestions = [];

	$http({	
		method: 'GET',		
		url: '/fs/teams.json'
	}).success(function (result) {
		$scope.teams = result;
		var numTeams = Object.keys($scope.teams).length;
		console.log(numTeams + " teams successfully fetched!");
	});
	
	$http({
		method: 'GET',
		url: '/fs/judgingpanels.json'
	}).success(function (result) {
		$scope.judgingpanels = result;
		var numPanels = Object.keys($scope.judgingpanels).length;
		console.log(numPanels + "unfiltered judging panels successfully fetched!");
	});
	
	$http({
		method: 'GET',
		url: '/fs/questions.json'
	}).success(function (result) {
		$scope.rubricQuestions = result;
		var numQuestions = Object.keys($scope.rubricQuestions).length;
		console.log(numQuestions + " questions successfully loaded!");
		
		
	});
	
	$scope.ChangeForm = function(questionSel,answerselect) {
		//store meta information about rubric
		$scope.rubric["Team"] =  $scope.selectedTeam;
		$scope.rubric["Panel"] = $scope.selectJudgingPanel;
		$scope.rubric["Category"] = $scope.rubricCategory;
		//store answer, creating a property for the question ID and the answerID, only if passed
		if (questionSel == null){
		}else{
			$scope.rubric[questionSel] = answerselect;
		}
	}
	
	$scope.ResetForm = function(){
		$scope.rubric = {};	
		console.log("Form Reset!");
	}
	

	/** Form validation */
	function isTeamSelected() { 
		if ($scope.selectedTeam && $scope.selectedTeam.number) return true;
		return false;
	}
	
	function isPanelSelected() { 
		if ($scope.selectJudgingPanel && $scope.selectJudgingPanel.panel) return true;
		return false;
	}
	
	function areAllquestionsAnswered() {
		var k = $scope.rubricQuestions.map(function(q) {
			return q.questionID;
		});
			//Object.keys($scope.rubricQuestions)
		var allQuestionsAnswered =  k.every(function(answer){
			return answer in $scope.rubric;
		});
		return allQuestionsAnswered;
		
	}
	
	// Combine validation checks and return to form
	$scope.isSubmitEnabled = function() {
		return isTeamSelected() &&
			isPanelSelected() &&
			areAllquestionsAnswered();
	}
	
	$scope.SubmitForm = function (){
		var filename = "rubric_" +$scope.rubric["Category"] + "_" + $scope.rubric.Team.number + "_" + Date.now();
		// debugging 
		console.log("-- Current rubric data --");
		console.log($scope.rubric);
		$http({
		method: 'POST',
		url: '/fs/completed_rubrics/' +filename+ '.json',
		headers: { 'Content-Type': 'application/json; charset=UTF-8' },
		data: $scope.rubric
		}).success(function (){
			console.log("Saved!");
			console.log("--------");
			
			$window.alert('Thank you for submitting the ' + $scope.rubric["Category"]  + ' rubrics for team (' + $scope.rubric.Team.number+ ') ' +  $scope.rubric.Team.name + '.');
			$scope.ResetForm();
			
		}).error(function (){
			console.log("Failed!");
			console.log("--------");
		});	
	}
});

