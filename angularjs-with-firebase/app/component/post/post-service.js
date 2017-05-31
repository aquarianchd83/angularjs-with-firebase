'use strict';
post.factory('postSvc', ['$firebaseArray',
                          '$firebaseObject',
                          '$q',

 function ($firebaseArray,
          $firebaseObject,
          $q) {


     return {

         getAll: function (createdBy) {

             var deferred = $q.defer();

             var ref = new firebase.database().ref('Articles').orderByChild("createdBy").equalTo(createdBy);

             ref.on('value', function (snap) {
                 deferred.resolve(snap.val());
             });

             return deferred.promise;
         },

         create: function (createdBy, article) {

             var ref = firebase.database().ref().child('Articles');
             var articles = $firebaseArray(ref);
             return articles.$add({
                 title: article.titleTxt,
                 post: article.postTxt,
                 createdBy: createdBy
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
         },

         deletePost: function (id) {
             var ref = firebase.database().ref().child('Articles/' + id);
             ref.remove();
         }

     };
 }]);

 