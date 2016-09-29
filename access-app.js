var app = angular.module('accessApp', []);
    app.controller('AccessCtrl', function ($scope, UsersService) {
      $scope.others = [
          {name:'Dylan Fernandez', rights:'read'},
          {name:'Michelle Hopkins', rights:'read'},
          {name:'Dave Kelley', rights:'read'}
      ];

      $scope.select = [
          {right: 'Admin'},
          {right: 'Write'},
          {right: 'Read'}

      ];

      $scope.users = UsersService.getUsers();

      $scope.delete = UsersService.delete;

      $scope.addUser = function() {
          UsersService.addUser($scope.search, $scope.access);
      }
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

  app.service('UsersService', function() {
      this.saved = localStorage.getItem('users');
      this.users = (localStorage.getItem('users')!==null) ? JSON.parse(this.saved) : [
          {name:'Paul Marshall', rights:'Read'},
          {name:'Andy Owens', rights:'Read'},
          {name:'Arnold Morris', rights:'Write'},
          {name:'Stacy Martin', rights:'Admin'}
      ];
      localStorage.setItem('users', JSON.stringify(this.users));

      this.getUsers = function() {
          return this.users;
      };

      this.delete = function(user) {
          this.users.splice(this.users.indexOf(user), 1);
          localStorage.setItem('users', JSON.stringify(this.users));
      };

      this.addUser = function(search, access) {
          var found = false;
          angular.forEach(this.users, function(val){
              if(search === val.name){
                  found = true;

              }
          });

          if (!found) {
              this.users.push({
                  name: search,
                  rights: access
              })
          }
          localStorage.setItem('users', JSON.stringify(this.users));

      };
      });


