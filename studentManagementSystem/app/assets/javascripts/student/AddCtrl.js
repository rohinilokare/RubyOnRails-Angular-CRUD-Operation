var app = angular.module('app');

app.controller('AddCtrl', ['$scope','$http', function($scope,$http) {

  $scope.getData = function() {
     $http.get('/students.json').success(function(data){
      $scope.students = data;
    });
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
      $scope.students.push(data);
    });
  }

  $scope.updateStudent = function(){
    $scope.student = {
      roll_no: $scope.roll_no,
      name: $scope.name,
      address: $scope.address,
      standard: $scope.standard
    };
    console.log('upd data',$scope);
    console.log('update id ',student.id);
    $http.put('/students'+student.id+'.json',student).error(function(data){
     alert('enter valid')}).then(function(response){
       return response.data;
       console.log('update',response.data);
     });
  }

$scope.getData();

}]);
