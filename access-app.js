
  var app = angular.module('accessApp', []);
    app.controller('AccessCtrl', AccessCtrl);
    function AccessCtrl(UsersService) {
      $scope.users = UsersService.getAll();
  });

  app.directive('Users', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        user: '='
      },
      templateUrl: 'users.html'
    }
  });


    app.service('UsersService', function($http) {
        var users = [
          {name:'Paul Marshall', rights:'read'},
          {name:'Andy Owens', rights:'read'},
          {name:'Arnold Morris', rights:'write'},
          {name:'Stacy Martin', rights:'admin'}
        ];
        this.getOne = function(id) {
          return users[id];
        };

        this.getAll = function() {
          return users;
        };

      });
