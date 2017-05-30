'use strict';
account.factory('accountSvc', ['$firebaseAuth',


 function ($firebaseAuth) {

     var auth = $firebaseAuth();

     return {
         login: function (username,password) {
             return auth.$signInWithEmailAndPassword(username, password);
         },
         register: function (username,password) {
             return auth.$createUserWithEmailAndPassword(username, password);
         }
     };
 }]);