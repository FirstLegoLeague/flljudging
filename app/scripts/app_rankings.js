flljudgingApp.controller('RankingsForm', function ($scope, $http, $window) {
	$scope.selectAward = null;
	$scope.awards = [];
	$scope.teams = [];
	$scope.teamsSorted = [];
	/*
		effect: removes the last team number matching with teamNumber from the array list;
	*/
	function removeFromList(list, teamNumber) {
		var found = -1;
		var i = 0;
		list.forEach(function(teamSorted) {
			if (teamSorted.number == teamNumber) {
				found = i;
			}
			i++;
		});
		if (found > -1) {
			list = list.splice(found, 1);
		}
		return list;
	}
	function existsTeam(list, teamNumber) {
		return list.some(function(teamSorted) {
			return teamSorted.number == teamNumber;
		});
	}
	$scope.sortableOptions = {
		// see: https://github.com/angular-ui/ui-sortable/
		// and http://angular-ui.github.io/ui-sortable/
		connectWith: '.connectedItemsExample .list-group',
		update: function(event, ui) {
			if ($scope.teamsSorted == null){
//				$scope.teamsSorted = ['1'];
			} else {
//
			} 
			if (ui.item.sortable.droptarget != null) {
//
			}
		},
		stop: function(event, ui) {
			if (ui.item.sortable.droptarget != null) {
//
			}
		}
	};
	$http({
		method: 'GET',
		url: '/fs/awards.json'
	}).success(function (result) {
		$scope.awards = result;
		$scope.awards.forEach(function(award) {
			award.teamsSorted = [];
		});
		var numAwards = $scope.awards.length;
		console.log(numAwards + " unfiltered awards successfully fetched!");
	});
	$http({	
		method: 'GET',		
		url: '/fs/teams.json'
	}).success(function (result) {
		$scope.teams = result;
		var numTeams = Object.keys($scope.teams).length;
		console.log(numTeams + " teams successfully fetched!");
	});
	$scope.clearTeams = function() {
		this.teams = [];
	}
	$scope.clearAwards = function() {
		this.awards.forEach(function(award) {
			award.teamsSorted = [];
		});
	}
	$scope.collectNominations = function(award) {
		/*
		file specs:
			completed_nominations\nomination_<award>_<timestamp>.json
			.category
			.panel
			[.rankings.ranking]
			[[.rankings.ranks]]
		*/
		$http({
			method: 'GET',
			url: '/fs/completed_nominations/'
		}).success(function(data) {
			var files = data.split("\n");
			files.forEach(function(filename) {
				$http({
					method: 'GET',
					url: '/fs/completed_nominations/' + filename
				}).success(function(data) {
					if (data.category == $scope.rubricCategory) {
						data.rankings.forEach(function(ranking) {
							if (ranking.ranking == award) {
								ranking.ranks.forEach(function(rank) {
									console.log(rank.teamNumber);
									$scope.teams.push(rank);
								});
							}
						});
					}
				}).error(function() {
					console.log("Failed!");
					console.log("--------");
				});	
			});
		}).error(function() {
			console.log("Failed!");
			console.log("--------");
		});	
	}
	$scope.isTeamRanked = function(team) {
		var result = false;
		this.teamsSorted.forEach(function(sortedTeam) {
			if (sortedTeam.number == team.number) {
				result = true;
			}
		});
		return result;
	}
	$scope.areAllRanked = function() {
		return this.teamsSorted.length >= this.teams.length;
	}
	$scope.isAwardSelected = function() { 
		return this.selectAward && this.selectAward.award;
	}
	$scope.ChangeForm = function() {
		if (this.selectAward) {
			this.clearAwards();
			this.clearTeams();
			this.collectNominations(this.selectAward.award);
		}
	}
	$scope.TestForm = function(){
		this.teamsSorted = this.teams.slice();
		//this.clearAwards();
		console.log("Form Shuffled!");
	}
	$scope.ResetForm = function(){
		this.clearAwards();
		console.log("Form Reset!");
	}
	$scope.isSubmitEnabled = function() {
		return this.isAwardSelected() && this.areAllRanked();
	}
	function getRanking(teamsSorted) {
		var ranking = [];
		var i = 0;
		teamsSorted.forEach(function(teamSorted) {
			i++;
			ranking.push({
				"rank": i,
				"teamNumber": teamSorted.number,
				"teamName": teamSorted.name
			});
		});
		return ranking;
	}
	$scope.SubmitForm = function (){
		var filename = "nomination_" + this.selectJudgingPanel.panel.replace(" ", "") + "_" + Date.now();
		var rankings = [];
		rankings.push({
			"ranking": "overall",
			"ranks": getRanking(this.teamsSorted)
		});
		this.awards.forEach(function(award) {
			if (award.category === $scope.rubricCategory) {
				rankings.push({
					"ranking": award.award,
					"ranks": getRanking(award.teamsSorted)
				});
			}
		});
		$http({
			method: 'POST',
			url: '/fs/completed_nominations/' + filename + '.json',
			headers: { 'Content-Type': 'application/json; charset=UTF-8' },
			data: { 
				category: this.rubricCategory,
				panel: this.selectJudgingPanel.panel,
				rankings: rankings
			}
		}).success(function() {
			console.log("Saved!");
			console.log("--------");
			$window.alert('Thank you for submitting the ' + $scope.selectJudgingPanel.panel + ' panel nominations.');
			$scope.ResetForm();
		}).error(function() {
			console.log("Failed!");
			console.log("--------");
		});	
	}
	$scope.BringDown = function (award, team){
		var ida = award.teamsSorted.indexOf(team);
		var idb = ida + 1;
		var teama = award.teamsSorted[ida];
		var teamb = award.teamsSorted[idb];
		award.teamsSorted[ida] = teamb;
		award.teamsSorted[idb] = teama;
	}
});