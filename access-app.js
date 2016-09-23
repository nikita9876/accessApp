

  var app = angular.module('accessApp', []);
    app.controller('AccessCtrl', function ($scope, UsersService) {
      $scope.users = UsersService.getAll();
      console.log($scope.users);

      $scope.delete = function(user) {
        $scope.users.splice($scope.users.indexOf(user), 1);
        };
  });

  app.directive('users', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        users: '='
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

        this.getAll = function() {
          return users;
        };

      });
