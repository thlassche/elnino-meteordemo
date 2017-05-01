angular.module("elninoMeteorDemo").config(
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('todos', {
        url: '/todos',
        templateUrl: 'client/todos/views/todo-list.ng.html',
        controller: 'TodoListCtrl'
      })
      .state('partyDetails', {
        url: '/todos/:todoId',
        templateUrl: 'client/todos/views/todo-details.ng.html',
        controller: 'TodoDetailsCtrl'
      });

    $urlRouterProvider.otherwise("/todos");
  });