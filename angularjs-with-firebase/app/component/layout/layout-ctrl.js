'use strict';
authenticatedHeader.controller('authenticatedHeaderCtrl', ['$scope',
                                                           'commonSvc',
function ($scope, commonSvc) {

    $scope.user = {
        email: commonSvc.getUser()
    };


    $scope.logout = function () {
        commonSvc.logoutUser();
    }
}]);