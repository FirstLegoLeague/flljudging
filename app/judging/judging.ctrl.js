// $scope is needed to fetch data with $http
flljudging.controller('JudgingFormController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  this.type = $routeParams.type;
  this.fulltype = typeConverter(this.type);

  // Panel that has its names parsed into one string
  // TODO [enhancement]: when selecting a panel is implemented, insert the right
  //  panel and its details here.
  this.parsedPanel = {
    "names":"me & you",
    "lane": "A"
  };
  // TODO [requirement]: add teamname in title
  this.title = this.fulltype + " form for: [team]";
  this.lang = "EN_US"
  var formFile = this.type + "_" + this.lang + ".xml";
  var formPath = "data/judgingForms/EN_US/RD_EN_US.xml";
  $http({
    method: 'GET',
    url: formPath
  }).then(function(result) {
    console.log("result: " + result.data);
    jsonForm = xml2js(result.data);
    console.log(jsonForm.form._lang);
    $scope.thisPanel = jsonForm.form.toString();
  });
}]);

/**
* Function to convert judging type shorthand to full string
* @param type: Shorthand string for judging type
* @return full string of judging type
*/
function typeConverter(type) {
  fulltype = "error";
  switch (type) {
    case "PR":
      fulltype = "Project";
      break;
    case "RD":
      fulltype = "Robot Design";
      break;
    case "CV":
      fulltype = "Core Values";
      break;
    default:
      fulltype = "undefined";
  }
  return fulltype;
}
