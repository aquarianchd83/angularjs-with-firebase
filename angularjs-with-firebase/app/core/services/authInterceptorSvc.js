'use strict';
app.factory('authInterceptorSvc', ['$q',
                                   '$location',
                                   'localStorageService',
                                   'ngSettings',
function ($q,
          $location,
          localStorageSvc,
          ngSettings) {
    var authInterceptorSvcFactory = {};

    var _request = function (config) {
        if (angular.isDefined(config.url) == false) {
            config.url = "/app/views/shared/blank.html";
        }

        config.headers = config.headers || {};

        var authData = localStorageSvc.get('authorizationData');
        if (authData) {
            config.headers.Authorization = 'Bearer ' + authData.token;
        }

        return config;
    }

    var _responseError = function (rejection) {

       
        return $q.reject(rejection);
    }

    var _response = function (response) {
        
        return response;
    }

    authInterceptorSvcFactory.request = _request;
    authInterceptorSvcFactory.responseError = _responseError;
    authInterceptorSvcFactory.response = _response;

    return authInterceptorSvcFactory;
}]);