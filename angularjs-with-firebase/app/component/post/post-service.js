'use strict';
post.factory('postSvc', ['$firebaseArray',
                          '$firebaseObject',

 function ($firebaseArray,
          $firebaseObject) {


     return {
         getAll: function () {
             var ref = firebase.database().ref().child('Articles');
             return $firebaseArray(ref);
         },

         create: function (article) {
             var articles = this.getAll();
             return articles.$add({
                 title: article.titleTxt,
                 post: article.postTxt
             });
         },

         edit: function (id) {
             var ref = firebase.database().ref().child('Articles/' + id);
             return $firebaseObject(ref);
         },

         updatePost: function (id, article) {
             var ref = firebase.database().ref().child('Articles/' + id);
             return ref.update({
                 title: article.title,
                 post: article.post
             });
         }

     };
 }]);