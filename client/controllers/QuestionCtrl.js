
angular.module('qurvey.controllers')

// Functioning Unit Testing Controller declaration
// .controller('LoginController', ['$scope', function($scope, $state, Login) {

// Functioning Controller declaration
.controller('QuestionController', function($scope, $state) {

  $scope.questions = function(){
    console.log('QuestionController -  questions()');
    //
    $state.go('main.questions.filter');
  };
  
  $scope.ask = function(){
    console.log('QuestionController -  ask()');
    // 
    $state.go('main.ask');
  };
  
  $scope.top = function(){
    console.log('QuestionController -  top()');
    // 
    $state.go('main.questions.top');
  };
  
  $scope.recent = function(){
    console.log('QuestionController -  recent()');
    // 
    $state.go('main.questions.recent');
  };

// Closing Function Controller declaration
});

// Closing Function Unit Testing Controller declaration
// }]);