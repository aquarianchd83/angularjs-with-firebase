'use strict';

// This service reads the error mesage from the response object.
app.service('responseSvc', ['$q',
                            'commonSvc',

function ($q,
          commonSvc) {
    this.successCompleted = function ($scope, response) {
        var deferred = $q.defer();

        if (angular.isObject(response) && angular.isObject(response.data)) {
            if (response.data.message != null && response.data.message.length > 0) {
                $scope.success = true;
                $scope.message = response.data.message;
            }

            $scope.isSubmitBtnClicked = false;
            $scope.isSubmitBtnDisable = false;
            deferred.resolve(response.data.success);
        }

        return deferred.promise;
    };

    this.failureCompleted = function ($scope, error) {
        var deferred = $q.defer();

        $scope.message = commonSvc.getError(error);

        if (angular.isDefined($scope.message) && $scope.message != null) {
            $scope.error = $scope.message.indexOf("<li>") == -1;
            $scope.errorSummary = !$scope.error;
        }

        $scope.isSubmitBtnDisable = false;
        deferred.resolve(true);
        return deferred.promise;
    };
}]);