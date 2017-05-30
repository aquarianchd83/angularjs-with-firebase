app.run(['$rootScope',
         '$location',
         '$window',
         '$timeout',

function ($rootScope,
          $location,
          $window,
          $timeout) {

    $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {

        // After changing state to scroll at the top of new page
        window.scrollTo(0, 0);
         
    });

    // Globally handle the ajaxSuccess, ajaxError, ajaxComplete
    $(document).ajaxSuccess(function (evt, jqXHR, settings) {
    });

    $(document).ajaxError(function (evt, jqXHR, settings, err) {
        //  alert("Global error callback.");
    });

    $(document).ajaxComplete(function (evt, XHR, settings) {
        //  alert("Global completion callback.");
    });
}]);