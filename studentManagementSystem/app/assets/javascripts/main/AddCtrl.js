var app = angular.module('app');

app.controller('AddCtrl', ['$scope', function($scope) {
  $scope.students = [];

	console.log($scope.students)
  $scope.addStudent = function() {
  	console.log('in add student function')
    $scope.showform=false;
    $scope.students.push({
      roll_no: $scope.roll_no,
      name: $scope.name,
      address: $scope.address,
      standard: $scope.standard
    });

    $scope.roll_no = '';
    $scope.name = '';
    $scope.address = '';
    $scope.standard = '';
  };

}]);
