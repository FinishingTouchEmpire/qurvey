
angular.module('qurvey.services')

.service('Login', function($http) {
  
  var login = function(data) {
    console.log('Login service: login = ', data)
    return $http({
      method: 'POST',
      url: '/auth/login/',
      data: JSON.stringify(data)
      // data: data
    }).then(function(data) {
      return data;
    }, function(error) {
      return error;
    });
  };

  return {
    login: login
  };
  
});