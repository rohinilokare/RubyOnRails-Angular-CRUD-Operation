angular
 .module('app', ['ui.router', 'templates'])
 .config(['$stateProvider', '$urlRouterProvider',
 function($stateProvider, $urlRouterProvider) {
 $stateProvider
  .state('students', {
  url: '/students',
  templateUrl: 'student/home.html',
  controller: 'StudentsCtrl'
  })

  .state('new', {
  url: '/new',
  templateUrl: 'student/new.html',
  controller: 'StudentsCtrl'
  })

  .state('edit', {
  url: '/:id/edit',
  templateUrl: 'student/new.html',
  controller: 'UpdateCtrl'
  })

  .state('show', {
  url: '/:id',
  templateUrl: 'student/show.html',
  controller: 'ShowCtrl'
  });
  $urlRouterProvider.otherwise('students');
 }])
