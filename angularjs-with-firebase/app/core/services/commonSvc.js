'use strict';

// This service contain the shared methods
app.service('commonSvc', ['$firebaseAuth', '$state', 'localStorageService',
 function ($firebaseAuth,
           $state,
           localStorageSvc)
 {
    var user = "";
    var auth = $firebaseAuth();

    return {
        getUser: function () {

            return localStorageSvc.get('authorizationData');


            if (user == "") {
                user = localStorage.getItem("user");
            }
            return user;
        },
        setUser: function (value) {
            localStorageSvc.set("authorizationData", value);
            user = value;
        },
        logoutUser: function () {
            auth.$signOut();
            user = "";
            localStorageSvc.remove('authorizationData');
            $state.go("login");
        }
    };
}]);

