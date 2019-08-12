var app = angular.module('app');
app.controller('ShowCtrl',['$stateParams','$scope','$http', function($stateParams,$scope,$http) {
	var id = $stateParams.id;
	$scope.showStudent = function(){
	$http.get('/students/'+id).success(function(data){
		$scope.show_student = data;
	});
	}
	$scope.showStudent();
}]);
