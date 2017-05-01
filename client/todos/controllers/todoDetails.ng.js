angular.module("elninoMeteorDemo").controller("TodoListDetailsCtrl",
  function($scope, $stateParams, $meteor){

    $scope.todo = $meteor.object(Todos, $stateParams.todoId);

});