'use strict';
account.controller('accountCtrl', ['$scope',
                                   '$stateParams',
                                   '$state',
                                   '$window',
                                   'commonSvc',
                                   'accountSvc',
                                   

function ($scope,
          $stateParams,
          $state,
          $window,
          commonSvc,
          accountSvc
          ) {

    $scope.user = {
        email: 'harishchief@gmail.com',
        password: 'asd@123A'
    };

    $scope.login = function () {

        if ($scope.user.email && $scope.user.password) {

            accountSvc.login($scope.user.email, $scope.user.password).then(function () {
                commonSvc.setUser($scope.user.email);
                $state.go("posts");
            }).catch(function (error) {
                $scope.errMsg = true;
                $scope.errorMessage = error.message;
            });

             
        }
    }

    $scope.register = function () {
        if ($scope.user.email && $scope.user.password) {
            accountSvc.register($scope.user.email, $scope.user.password).then(function () {
                $window.alert("User Successfully Created");
                $state.go('login');
            }).catch(function (error) {
                $scope.errMsg = true;
                $scope.errorMessage = error.message;
            });
        }

    }

}]);