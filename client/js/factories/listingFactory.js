angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
         /*
       returns result of HTTP GET Request with given listing to route specified by Express.
       */
     // return $http.get('http://localhost:8080/api/listings');
     return $http.post('https://tranquil-gorge-24478.herokuapp.com/api/listings', listing); 
    },
	
	create: function(listing) {
    /*
       returns result of HTTP POST Request with given listing to route specified by Express.
       */
	  return $http.post('https://tranquil-gorge-24478.herokuapp.com/api/listings', listing);
    }, 

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method with given listing to route specified by Express.
       */
      return $http.delete('https://tranquil-gorge-24478.herokuapp.com/api/listings/' + id);

    }
  };

  return methods;
});
