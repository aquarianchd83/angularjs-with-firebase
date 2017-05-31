'use strict';
post.controller('postCtrl', ['$scope',
                            '$state',
                            'postSvc',
                            'commonSvc',

function ($scope,
          $state,
          postSvc,
          commonSvc) {

    $scope.article = {
        titleTxt: "",
        postTxt: ""
    };


    $scope.loadArticles = function () {
        postSvc.getAll(commonSvc.getUser().id).then(function (data) {
            $scope.articles = data;
        });
    }


   

    $scope.createPost = function () {

        postSvc.create(commonSvc.getUser().id, $scope.article).then(function (ref) {
            $scope.success = true;
            window.setTimeout(function () {
                $scope.$apply(function () {
                    $scope.success = false;
                    $state.go("posts");
                });
            }, 2000);
        }, function (error) {
            console.log(error);
        });
    };


    $scope.editPost = function (id) {
        $scope.editPostData = postSvc.edit(id);
    };

    $scope.updatePost = function (id) {

        postSvc.updatePost(id, $scope.editPostData).then(function (ref) {
            $scope.$apply(function () {
                $("#editModal").modal('hide');
                $scope.loadArticles();
            });
        }, function (error) {
            console.log(error);
        });
    };

    $scope.deleteCnf = function (id) {
        $scope.deleteArticle = id;
    };

    $scope.deletePost = function (id) {

        postSvc.deletePost(id);
        $scope.loadArticles();
        $("#deleteModal").modal('hide');
    };
}]);