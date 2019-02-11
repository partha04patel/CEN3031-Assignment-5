angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });
    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
      /* 
      Save the article using the Listings factory. If the object is successfully 
	  saved redirect back to the list page. Otherwise, display the error.
	 */
  if ($scope.newListing != undefined) {
    $scope.listings.push($scope.newListing);
  }
  Listings.create($scope.newListing).then(function(response) {
    $scope.newListing = {};
  }, function(error) {
    console.log('Unable to add the listing:', error);
    });
    };

    $scope.deleteListing = function(id) {
	   /**TODO
        Delete the article using the Listings factory. If the removal is successful, 
		navigate back to 'listing.list'. Otherwise, display the error. 
       */
      $scope.listings.splice(id, 1);

      Listings.delete(id).then(function(response) {
        console.log(response);
      }, function(error) {
        console.log('Unable to delete the listing:', error);
        });
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);