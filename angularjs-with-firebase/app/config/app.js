var app = angular.module('taskApp', ['ui.router',
                                           'LocalStorageModule',
                                           'ngSanitize',
                                           'account',
                                           'post',
'firebase',
'authenticatedHeader']);

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorSvc');
});


