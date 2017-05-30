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

    $scope.articles = postSvc.getAll();

    $scope.createPost = function () {

        postSvc.create($scope.article).then(function (ref) {
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
            });
        }, function (error) {
            console.log(error);
        });
    };

    $scope.deleteCnf = function (article) {
        $scope.deleteArticle = article;
    };

    $scope.deletePost = function (deleteArticle) {
        $scope.articles.$remove(deleteArticle);
        $("#deleteModal").modal('hide');
    };
}]);