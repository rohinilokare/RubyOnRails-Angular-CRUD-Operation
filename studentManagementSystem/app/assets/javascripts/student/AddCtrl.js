var app = angular.module('app');

app.controller('AddCtrl', ['$scope','$http', function($scope,$http) {
  $scope.getData = function() {
<<<<<<< HEAD
     $http.get('/students.json').success(function(data){
      $scope.students = data;
      console
    });
=======
    console.log("121");
    return $http.get('/students.json').success(function(data){
      console.log('***********');
    });
    // $scope.students =$http.get('/students.json').success(function(data){});
    // console.log($scope.students);
>>>>>>> 51d52c6dbb2813c3b5b91c003c6cba24213e60ee
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
<<<<<<< HEAD
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
=======

    });
  }

>>>>>>> 51d52c6dbb2813c3b5b91c003c6cba24213e60ee
}]);
