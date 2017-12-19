flljudging.factory('objectArray', ['$http', function($http) {
      // This is returning a $$state object
      // instead of response.data...
      return $http.get('../settings.xml').then(function(response) {
          console.log(response.data);
          return response.data;
      });
  }]);
