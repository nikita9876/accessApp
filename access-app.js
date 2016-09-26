var app = angular.module('accessApp', []);
    app.controller('AccessCtrl', function ($scope, UsersService) {
      $scope.others = [
          {name:'Dylan Fernandez', rights:'read'},
          {name:'Michelle Hopkins', rights:'read'},
          {name:'Dave Kelley', rights:'read'}
      ];
      $scope.variations = [
          {right: 'Read'},
          {right: 'Write'},
          {right: 'Admin'}

      ];
      $scope.users = UsersService.getAll();
        
      $scope.delete = UsersService.delete;

      $scope.addUser = function() {
          var found = false;
          angular.forEach($scope.users, function(val){
             if($scope.search === val.name){
                 found = true;

             }
          });

          if (!found) {
              $scope.users.push({
                  name: $scope.search,
                  rights: $scope.access
              })
          }
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
        {name:'Paul Marshall', rights:'Read'},
        {name:'Andy Owens', rights:'Read'},
        {name:'Arnold Morris', rights:'Write'},
        {name:'Stacy Martin', rights:'Admin'}
      ];

      this.getAll = function() {
        return users;
      };

        this.delete = function(user) {
            this.users.splice(this.users.indexOf(user), 1);
        };

      });


