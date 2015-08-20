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
            'basicControllerService', 'platformModal', 'tweetDetailService', '$ionicScrollDelegate',
            function ($scope, $stateParams, tweetService, $ionicHistory, $state,
                      tweetCommentService, $ionicActionSheet, $timeout,
                      basicControllerService, platformModal, tweetDetailService, $ionicScrollDelegate) {

                //extend basic class
                basicControllerService.initController($scope);

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
                        //store the scroll position
                        tweetDetailService.setScrollPosition($ionicScrollDelegate.getScrollPosition());
                        platformModal.openModal({
                            templateUrl: 'js/tweet/templates/add-comment.html',
                            scope: $scope
                        });
                    },
                    hideModal: function () {
                        platformModal.hideModal();
                        var scrollPosition = tweetDetailService.getScrollPosition();
                        //set the scroll position back
                        $timeout(function () {
                            $ionicScrollDelegate.scrollTo(scrollPosition.left, scrollPosition.top, true);
                        });
                    }
                };

                /*
                 * reply comment
                 */
                $scope.replyComment = function () {

                    // Show the action sheet
                    var hideSheet = $ionicActionSheet.show({
                        buttons: [
                            {text: 'Reply'},
                            {text: 'Copy'}
                        ],
                        //destructiveText: 'Delete',
                        //titleText: 'Modify your album',
                        cancelText: 'Cancel',
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