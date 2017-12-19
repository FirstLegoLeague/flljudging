// Service for exporting settings
flljudging.service('SettingsService', function($http) {
  this.xmlData = $http.get('../settings.xml')
    .then(function(response) {
      return response;
    });
  version = "0.0.1";
  text = 'FLL Judging <small>(' + version + ')</mark>';
  this.getTitle = function() {
    return text;
  };
});
