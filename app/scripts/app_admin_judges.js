flljudgingApp.controller('AdminJudgesForm', function ($scope, $http, $window) {

	// Creation of the panel-object for registering new panels
	var emptyPanel = {
		"id":"",
		"category":"",
		"judgingGroup":"",
		"room": "",
		"names": []
	};

	// Variable that enables the save and export buttons when judgingpanels are registered
	$scope.saveJudgesList = false;

	// Getting the current saved jduging-panels (if any)
	$http({
		method: 'GET',
		url: '/fs/judgingpanels.json'
	}).success(function (result) {
		$scope.judgingpanels = result;
		var numPanels = Object.keys($scope.judgingpanels).length;
		if(numPanels == 0) {
			$scope.judgingpanels = null;
		} else {
			$scope.saveJudgesList = true;
		}
		console.log(numPanels + " unfiltered judging panels successfully fetched!");
	});

	// Deletes a panel from the judges-list
	$scope.DelPanel = function (index) {
		console.log("Delete panel" + index);
		$scope.judgingpanels.splice(index, 1);
		if($scope.judgingpanels.length == 0) {
			$scope.judgingpanels = null;
		}
	};

	// Functions used when adding new panels
	function getPanelID(category, lane) {
		return category + "-" + lane;
	};

	// Check whether the room is already assigned
	$scope.checkRoom = function(newRoom) {
		if($scope.judgingpanels != null) {
			var roomExists = false;
			angular.forEach($scope.judgingpanels, function(panel, val) {
				if(panel.room == newRoom) {
					roomExists = true;
				}
			});
			console.log("Room exist?:" + roomExists);
		} else {
			return;
		}
	};

	// Add name to the names-list of the new panel
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

	// Delete name from the names-list of the new panel
	$scope.DelName = function(index) {
		$scope.newPanel.names.splice(index, 1);
		console.log("New names list:" + $scope.newPanel.names);
	};

	// Adds the new panel to the judges-list
	$scope.AddNewPanel = function () {
		if($scope.newPanel != null) {
			$scope.newPanel.id = getPanelID(angular.copy($scope.newPanelInput.category), angular.copy($scope.newPanelInput.judgingGroup));
			$scope.newPanel.category = angular.copy($scope.newPanelInput.category);
			$scope.newPanel.judgingGroup = angular.copy($scope.newPanelInput.judgingGroup);
			$scope.newPanel.room = angular.copy($scope.newPanelInput.room);
			console.log("New panel added!");
			console.log(JSON.stringify($scope.newPanel));
			if($scope.judgingpanels == null) {
				$scope.judgingpanels = [];
				$scope.judgingpanels.push($scope.newPanel);
				$scope.saveJudgesList = true;
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

	// This function saves the current listed panels to a json-file
	// TODO: Add choose between download, export to hub or "save as application settings (now)"
	$scope.saveJudgingPanels = function () {
		var filename = "judgingpanels";
		$http({
		method: 'POST',
		url: '/fs/' +filename+ '.json',
		headers: { 'Content-Type': 'application/json; charset=UTF-8' },
		data: $scope.judgingpanels
		}).success(function (){
			console.log("Saved!");
			console.log("--------");
			
			$window.alert('Judgingpanels saved to the application!');
			
		}).error(function (){
			console.log("Failed!");
			console.log("--------");
		});	
		$scope.saveJudgesList = false;
	};
});