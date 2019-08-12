app.controller('UpdateCtrl',['$stateParams','$scope','$http', function($stateParams,$scope,$http) {
  var id = $stateParams.id;
  console.log('scope',$scope);
  console.log('roll',$stateParams.roll_no);
  $scope.updateStudent = function(student){
    $http.put('/students/'+id+'.json',student).error(function(data){
     alert('Error,plz try again')}).then(function(response){
       return response.data;
       console.log('update',response.data);
     });
  }
  $scope.updateStudent();
}]);
