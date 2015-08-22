/**
 * Created by Jackey Li on 2015/8/9.
 */
(function (angular) {
    'use strict';

    /*
     * tweet detail controller
     */
    angular.module(globalSettings.appName).controller('tweetDetailController',
        ['$scope', '$stateParams', 'tweetService', '$ionicHistory', '$state',
            'tweetCommentService', '$ionicActionSheet', '$timeout',
            'basicControllerService', 'platformModal', 'tweetDetailService', '$translate',
            function ($scope, $stateParams, tweetService, $ionicHistory, $state,
                      tweetCommentService, $ionicActionSheet, $timeout,
                      basicControllerService, platformModal, tweetDetailService, $translate) {

                //extend basic class
                basicControllerService.initController($scope);

                //translate
                $scope.tweetDetailTranslate = {
                    title: $translate.instant('tweet.tweetDetail'),
                    comment: $translate.instant('tweet.comment'),
                    forward: $translate.instant('tweet.forward'),
                    addComment: $translate.instant('tweet.addComment'),
                    noComment: $translate.instant('tweet.noComment')
                };

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

                /*
                 * init: get the data
                 */
                var init = function () {
                    $scope.tweet = tweetService.getTweetById(parseInt(tweetId));

                    tweetCommentService.getCommentByTweetId($scope.tweet.id).then(function (comments) {
                        $scope.comments = comments;
                        $scope.hasComments = $scope.comments.length;
                    }, function (error) {
                        //todo
                    });
                };

                /*
                 * add comment
                 */
                //$scope.addComment = function () {
                //todo
                //};

                /*
                 * add tweet modal
                 */
                $scope.modalFn = {
                    openModal: function () {
                        platformModal.openModal({
                            templateUrl: 'js/tweet/templates/add-comment.html',
                            scope: $scope
                        });
                    },
                    hideModal: function () {
                        platformModal.hideModal();
                    }
                };

                /*
                 * reply comment
                 */
                var reply = $translate.instant('tweet.reply'),
                    copy = $translate.instant('tweet.copy'),
                    cancel = $translate.instant('tweet.cancel');
                $scope.replyComment = function () {

                    // Show the action sheet
                    var hideSheet = $ionicActionSheet.show({
                        buttons: [
                            {text: reply},
                            {text: copy}
                        ],
                        //destructiveText: 'Delete',
                        //titleText: 'Modify your album',
                        cancelText: cancel,
                        cancel: function () {
                            // add cancel code..
                        },
                        buttonClicked: function (index) {
                            console.log(index);
                            return true;
                        }
                    });

                    // For example's sake, hide the sheet after two seconds
                    $timeout(function () {
                        hideSheet();
                    }, 2000);

                };

                /*
                 * back
                 */
                $scope.back = function () {
                    //$ionicHistory.goBack();
                    $state.go('tab.tweet');
                };

                //init the page
                init();
            }]);
})(angular);