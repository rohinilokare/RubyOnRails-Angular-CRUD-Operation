var app = angular.module('app');

app.controller('AddCtrl', ['$scope','$http', function($scope,$http) {
  $scope.getData = function() {
    console.log("121");
    return $http.get('/students.json').success(function(data){
      console.log('***********');
    });
    // $scope.students =$http.get('/students.json').success(function(data){});
    // console.log($scope.students);
  }

  $scope.addStudent = function() {
    student = {
      roll_no: $scope.roll_no,
      name: $scope.name,
      address: $scope.address,
      standard: $scope.standard
    };
    $scope.roll_no = '';
    $scope.name = '';
    $scope.address = '';
    $scope.standard = '';
    $http.post('/students.json',student).success(function (data) {

    });
  }

}]);
