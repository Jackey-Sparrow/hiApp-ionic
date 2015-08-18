/**
 * Created by Jackey Li on 2015/8/9.
 */
(function (angular) {
    'use strict';

    /*
     * tweet detail controller
     */
    angular.module(globalSettings.appName).controller('tweetDetailController',
        ['$scope', '$stateParams', 'tweetService', '$ionicHistory', '$state', 'tweetCommentService',
            function ($scope, $stateParams, tweetService, $ionicHistory, $state, tweetCommentService) {

                //tweet Id
                var tweetId = $stateParams.tweetId;
                if (!tweetId) {
                    $state.go('tab.tweet');
                }

                //get tweet
                $scope.tweet = tweetService.getTweetById(parseInt(tweetId));

                //get comments
                $scope.comments = [];
                $scope.hasComments = $scope.comments.length;

                tweetCommentService.getCommentByTweetId($scope.tweet.id).then(function (comments) {
                    $scope.comments = comments;
                    $scope.hasComments = $scope.comments.length;
                }, function (error) {
                    //todo
                });

                /*
                 * back
                 */
                $scope.back = function () {
                    //$ionicHistory.goBack();
                    $state.go('tab.tweet');
                };
            }]);
})(angular);