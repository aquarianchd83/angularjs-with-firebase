app.directive('spinner', function () {
    return {
        restrict: 'E',
        replace: false,
        scope: {
            enable: '=?',
            isbtngreenbackground: '=?'
        },
        template: '<span ng-show="enable">&nbsp;&nbsp;&nbsp;</span><img ng-src="/content/images/{{image}}" style="z-index:100;"  ng-show="enable" />',
        controller: function ($scope) {
            $scope.image = $scope.isbtngreenbackground ? "spinner-green-btn.gif" : "spinner-black-btn.gif";
        }
    };
}); 