angular.module('GiphyApp', [])

.run(function() {
  console.log('App has loaded!');
})
.controller('GiphyCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.giphy = [];

  $scope.getGiphy = function() {
    var req = {
      url: 'http://api.giphy.com/v1/gifs/search?q=seahawks&api_key=dc6zaTOxFJmzC',
      method: 'GET'
    }

    $http(req).then(function success(res) {
      $scope.giphy = res.data.value;
    }, function error(res) {
      console.log(res);
    });
  }
}]);