var app = angular.module('app');
app.controller('StudentsCtrl', ['$scope','$http', function($scope,$http) {
  $scope.getData = function() {
    console.log(2);
     $http.get('/students.json').success(function(data){
      console.log(3);
      $scope.students = data;
    });
  }

  $scope.addStudent  = function() {
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

    $http.post('/students.json',student).success(function(data){
    });
  }

  $scope.deleteStudent = function(student){
    $http.delete('/students/'+student.id+'.json',student).success(function(data){
      var index = $scope.students.findIndex(stud => stud.id === student.id);
      console.log(index);
      $scope.students = $scope.students.splice(index,1);
      console.log($scope.students);
      $scope.getData();
    });
  }

$scope.getData();
}]);
