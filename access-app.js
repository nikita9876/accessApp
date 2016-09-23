var app = angular.module('accessApp', []);
    app.controller('AccessCtrl', function ($scope, UsersService) {
      $scope.others = [
          {name:'Dylan Fernandez', rights:'read'},
          {name:'Michelle Hopkins', rights:'read'},
          {name:'Dave Kelley', rights:'read'}
      ];
      $scope.users = UsersService.getAll();

      $scope.delete = function(user) {
        $scope.users.splice($scope.users.indexOf(user), 1);
        };
  });

  app.directive('users',function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        users: '='
      },
      templateUrl: 'users.html',
        controller: 'AccessCtrl'

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


