var myApp = angular.module('app', []);

//myApp.factory('TodoFactory', [function(){
  //var done = function(idx){
    //return $scope.todos.splice(idx,1)
  //}
  //return {
    //done: done
  //}
//}])
//push todos in array
//attach that to scope

myApp.controller('todoctrl', ['$scope', '$http', function($scope, $http){

 $scope.addTodo = function(){
   console.log('clicked')
   var data = {
     todo: $scope.todo
   }
   console.log(data, 'here')
    $http({
      method:'POST', 
      url: '/todo',
      data: data,
    }).then(function(response){
      $scope.todos.push(response.data)
      console.log(response, 'POOOOST')
    }).catch(function(err){
      console.log(err)
    })
  }

  $http({
     method:'GET', 
      url: '/todo',
    }).then(function(results){
      $scope.todos = results.data;
      console.log(results.data, 'GEEET')
    }).catch(function(err){
      console.error(err)
    })

//$scope.realTime = function() {
  //var item = $scope.todo
  //console.log('item in realtime', item)
  //$scope.todos.push(item);
//}

$scope.done = function(idx){
  console.log($scope.todos, 'TODOS');
  console.log('INDEX', idx)
  $scope.todos.splice(idx,1)
 }  
}])
