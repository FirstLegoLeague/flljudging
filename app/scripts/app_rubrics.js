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