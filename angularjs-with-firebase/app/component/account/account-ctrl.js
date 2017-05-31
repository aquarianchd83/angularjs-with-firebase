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
        email: '',
        password: ''
    };

    $scope.login = function () {

        if ($scope.user.email && $scope.user.password) {

            accountSvc.login($scope.user.email, $scope.user.password).then(function (response) {
                commonSvc.setUser({ id: response.uid, email: $scope.user.email });
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