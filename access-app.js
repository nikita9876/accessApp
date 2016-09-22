(function() {
  angular.module('accessApp', [])
    .controller('AccessCtrl', AccessCtrl);
    function AccessCtrl($scope) {
      $scope.users = [
        {name:'Paul Marshall', rights:'read'},
        {name:'Andy Owens', rights:'read'},
        {name:'Arnold Morris', rights:'write'},
        {name:'Stacy Martin', rights:'admin'}
      ];

    };

})();
