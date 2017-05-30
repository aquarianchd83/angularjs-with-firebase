'use strict';

app.service('notificationSvc', ['commonSvc',

function (commonSvc) {

    this.info = function (notifyMsg, notifyPosition, notifyCloseButton) {
        notifyPosition = angular.isDefined(notifyPosition) ? notifyPosition : "top-full-width";
        SEMICOLON.widget.notifications2("info", notifyMsg, notifyPosition, notifyCloseButton);
    };

    this.error = function (notifyMsg, notifyPosition, notifyCloseButton) {
        notifyPosition = angular.isDefined(notifyPosition) ? notifyPosition : "top-full-width";
        SEMICOLON.widget.notifications2("error", notifyMsg, notifyPosition, notifyCloseButton);
    };

    this.success = function (notifyMsg, notifyPosition, notifyCloseButton) {

        notifyPosition = angular.isDefined(notifyPosition) ? notifyPosition : "top-full-width";
        SEMICOLON.widget.notifications2("success", notifyMsg, notifyPosition, notifyCloseButton);
    };

    this.warning = function (notifyMsg, notifyPosition, notifyCloseButton) {
        notifyPosition = angular.isDefined(notifyPosition) ? notifyPosition : "top-full-width";
        SEMICOLON.widget.notifications2("warning", notifyMsg, notifyPosition, notifyCloseButton);
    };

    this.show = function (response, $scope) {

        if (response.status == 200) {
            if (angular.isObject(response.data)) {
                if (response.data.success) {
                    this.success(response.data.message);
                }
                else {
                    this.error(response.data.message);
                }
            }
            else {
                // this.error(commonSvc.getError());
            }
        }


        if (angular.isObject($scope)) {
            $scope.isSubmitBtnClicked = false;
            $scope.isSubmitBtnDisable = false;
        }
    }

    this.showError = function (error, $scope) {
        this.error(commonSvc.getError(error));

        if (angular.isObject($scope)) {
            $scope.isSubmitBtnClicked = false;
            $scope.isSubmitBtnDisable = false;
        }
    }


}]);