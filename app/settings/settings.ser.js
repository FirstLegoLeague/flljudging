// Service for exporting settings
flljudging.service('SettingsService', function() {
  version = "0.0.1";
  text = 'FLL Judging <small>(' + version + ')</mark>';
  this.getTitle = function() {
    return text;
  };
});
