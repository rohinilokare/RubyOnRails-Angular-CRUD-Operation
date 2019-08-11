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

    $http.post('/students.json',student).success(function(data){
    });
  }

  $scope.showStudent = function(student){
    $http.get('/students/'+student.id+'.json',student).success(function(data){
      $scope.show_student = data;
      console.log($scope.show_student);
    });
  }

  $scope.deleteStudent = function(student){
    $http.delete('/students/'+student.id+'.json',student).success(function(data){
    });
  }

  $scope.editStudent = function(student){
    $scope.edit_student =student
  }
  $scope.updateStudent = function(student){
    console.log('update id ',student.id);
    $http.put('/students/'+student.id+'.json',student).error(function(data){
     alert('Error,plz try again')}).then(function(response){
       return response.data;
       console.log('update',response.data);
     });
  }

$scope.getData();
}]);
