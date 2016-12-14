flljudgingApp.controller('AdminJudgesForm', function ($scope, $http, $window) {
	
	//create the basic panel object
	var emptyPanel = {
		"id":"",
		"category":"",
		"lane":"",
		"room": "",
		"names": []
	};
	$http({
		method: 'GET',
		url: '/fs/n-judgingpanels.json'
	}).success(function (result) {
		$scope.judgingpanels = result;
		var numPanels = Object.keys($scope.judgingpanels).length;
		console.log(numPanels + "unfiltered judging panels successfully fetched!");
	});

	$scope.AddName = function(name) {
		if(name == "") {
			return;
		} else {
			if($scope.newPanel == null) {
				$scope.newPanel = angular.copy(emptyPanel);
				$scope.newPanel.names.push(name);
				console.log("New names list:" + $scope.newPanel.names);
				$scope.newPanelInput.nameInput = null;
			} else {
				$scope.newPanel.names.push(name);
				console.log("New names list:" + $scope.newPanel.names);
				$scope.newPanelInput.nameInput = null;
			}
		}
	};

	$scope.DelName = function(index) {
		$scope.newPanel.names.splice(index, 1);
		console.log("New names list:" + $scope.newPanel.names);
	};

	$scope.AddNewPanel = function () {
		if($scope.newPanel != null) {
			$scope.newPanel.id = "xx";
			$scope.newPanel.category = angular.copy($scope.newPanelInput.category);
			$scope.newPanel.lane = angular.copy($scope.newPanelInput.lane);
			$scope.newPanel.room = angular.copy($scope.newPanelInput.room);
			console.log("New panel added!");
			console.log(JSON.stringify($scope.newPanel));
			if($scope.judgingpanels == null) {
				$scope.judgingpanels = [];
				$scope.judgingpanels.push($scope.newPanel);
			} else {
				$scope.judgingpanels.push($scope.newPanel);
			}
			$scope.newPanel = null;
			$scope.newPanelInput = null;
			//console.log(JSON.stringify($scope.newPanel.names));
			//$scope.saveTheJudges();
		} else {
			console.log("Error while saving!");
		}
	};

	$scope.DelPanel = function (index) {
		console.log("Delete panel" + index);
		$scope.judgingpanels.splice(index, 1);
		if($scope.judgingpanels.length == 0) {
			$scope.judgingpanels = null;
		}
	}

	$scope.saveTheJudges = function () {
		var filename = "judgesTable_" + Date.now();
		$http({
		method: 'POST',
		url: '/fs/' +filename+ '.json',
		headers: { 'Content-Type': 'application/json; charset=UTF-8' },
		data: $scope.judgingpanels
		}).success(function (){
			console.log("Saved!");
			console.log("--------");
			
			$window.alert('Thank you for submitting the ' + $scope.judgingpanels);
			
		}).error(function (){
			console.log("Failed!");
			console.log("--------");
		});	
	};
});