angular.module("elninoMeteorDemo").controller("TodoListCtrl",
  function($scope, $meteor){

    $scope.newTodo = {};

    $scope.todos = $meteor.collection(Todos);

    $scope.remove = function(todo){
      $scope.todos.splice( $scope.todos.indexOf(todo), 1 );
    };

    $scope.removeAll = function(){
      $scope.todos.remove();
    };

    $scope.getPicture = function() {
      $meteor.getPicture().then(function(imageData) {
          $scope.newTodo.imageData = imageData;
      });
    };

    $scope.add = function() {
        if (!$scope.newTodo.name) return;
        $scope.todos.push(_.clone($scope.newTodo));
        $scope.newTodo = {};
    }


});