'use strict';

app.service('dialogBoxSvc', [
                               '$uibModal',
                               '$state',

function ($uibModal,
          $state) {

    this.delete = function (title, content, deleteFun) {

        $uibModal.open({
            backdrop: 'static',
            keyboard: false,
            templateUrl: 'deleteDialog.html',
            controller: function ($scope, $uibModalInstance) {

                $scope.title = title == null ? "Delete" : title;

                $scope.content = content == null ? "Sure you want to delete it?" : content;

                $scope.delete = function () {
                    $uibModalInstance.dismiss('cancel');

                    if (angular.isFunction(deleteFun)) {
                        deleteFun();
                    }
                }

                $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                }
            }
        });
    };
    //

    this.confirmationWithOK = function (title, content, func) {

        $uibModal.open({
            backdrop: 'static',
            keyboard: false,
            templateUrl: 'confirmationWithOKDialog.html',
            controller: function ($scope, $uibModalInstance) {

                $scope.title = title;
                $scope.content = content;

                $scope.ok = function () {

                    $uibModalInstance.dismiss('cancel');

                    if(angular.isFunction(func))
                    {
                        func();
                    }
                }

                $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                }
            }
        });
    }

}]);