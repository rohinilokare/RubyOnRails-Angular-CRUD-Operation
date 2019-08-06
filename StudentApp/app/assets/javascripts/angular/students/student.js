var app = angular.module('studentApp');

app.factory('Student', ['$resource', function($resource) {
  return $resource('/api/students/:id.json', { id: '@id' });
}]);
