/*
 Copyright 2011 The Go Authors.  All rights reserved.
 Use of this source code is governed by a BSD-style
 license that can be found in the LICENSE file.
*/

function TaskCtrl($scope, $http) {
  $scope.tasks = [];

  var logError = function(data, status) {
    console.log('code '+status+': '+data);
  };

  var refresh = function() {
    $http.get('/task/').
      success(function(data) { 
        $scope.tasks = data.Tasks;
      }).error(logError);
  };

  $scope.addTodo = function() {
    $http.post('/task/', {Title: $scope.todoText}).success(refresh).error(logError);
    $scope.todoText = '';
  };

  $scope.toggleDone = function(task) {
    task.Done = !task.Done
    $http.put('/task/'+task.ID, task).success(refresh).error(logError);
  };

  refresh();
}