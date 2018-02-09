// Controls the content of the navigation bar
flljudging.controller('NavbarController', function() {
  this.name = "FLL Judging";
  this.tournament = "EHV";
  this.version = "0.0.1";
  this.title = this.name + " <small>[" + this.tournament + "] (" + this.version + ")</small>";
});
