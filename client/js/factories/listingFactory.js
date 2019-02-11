angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
         /*
       returns result of HTTP GET Request with given listing to route specified by Express.
       */
      return $http.get('http://localhost:8080/api/listings');
    },
	
	create: function(listing) {
    /*
       returns result of HTTP POST Request with given listing to route specified by Express.
       */
	  return $http.post('http://localhost:8080/api/listings', listing);
    }, 

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method with given listing to route specified by Express.
       */
      return $http.delete('http://localhost:8080/api/listings/' + id);

    }
  };

  return methods;
});
