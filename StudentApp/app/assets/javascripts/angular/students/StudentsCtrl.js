var app = angular.module('studentApp', []);
app.controller('StudentCtrl', ['$scope', 'Student', function($scope, Event) {
  $scope.students = Student.query();
  $scope.students = [
    { roll_no: '1', name: 'rohini', address: 'pune', standard: '11'},
    { roll_no: '2', name: 'rohit', address: 'baner', standard: '12'}
  ];
    $scope.addStudent = function() {
    console.log('in add function')
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

  $scope.showform= false;
  };

}]);
