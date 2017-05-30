'use strict';

// This service contain the shared methods
app.service('commonSvc', ['$firebaseAuth', '$state', function ($firebaseAuth, $state) {
    var user = "";
    var auth = $firebaseAuth();

    return {
        getUser: function () {
            if (user == "") {
                user = localStorage.getItem("userEmail");
            }
            return user;
        },
        setUser: function (value) {
            localStorage.setItem("userEmail", value);
            user = value;
        },
        logoutUser: function () {
            auth.$signOut();
            user = "";
            localStorage.removeItem('userEmail');
            $state.go("login");
        }
    };
}]);

