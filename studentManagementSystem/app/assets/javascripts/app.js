angular
 .module('app', ['ui.router', 'templates'])
 .config(['$stateProvider', '$urlRouterProvider',
 function($stateProvider, $urlRouterProvider) {
 $stateProvider
  // .state('home', {
  // url: '/home',
  // templateUrl: 'main/_home.html',
  // controller: 'AddCtrl'
  // })

  .state('students', {
  url: '/students',
  templateUrl: 'student/home.html',
  controller: 'AddCtrl'
  })

  .state('students', {
  url: '/students',
  templateUrl: 'student/home.html',
  controller: 'AddCtrl'
  })

  .state('new', {
  url: '/new',
  templateUrl: 'student/create_new.html',
  controller: 'AddCtrl'
  });
  $urlRouterProvider.otherwise('students');
  $urlRouterProvider.otherwise('home');
 }])
