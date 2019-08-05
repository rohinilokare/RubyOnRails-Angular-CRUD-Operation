angular
 .module('app', ['ui.router', 'templates'])
 .config(['$stateProvider', '$urlRouterProvider',
 function($stateProvider, $urlRouterProvider) {
 $stateProvider
  .state('home', {
  url: '/home',
  templateUrl: 'main/_home.html',
  controller: 'MainCtrl'
  })

  .state('new', {
  url: '/new',
  templateUrl: 'main/create_new.html',
  controller: 'MainCtrl'
  });
  $urlRouterProvider.otherwise('new');
 }])
