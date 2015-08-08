/**
 * Created by Jackey Li on 2015/8/5.
 */
(function (angular) {
    'use strict';

    /*
     * tweet controller
     */
    angular.module(globalSettings.appName).controller('tweetController',
        ['$scope', 'basicControllerService', 'platformModal', 'tweetService', '$translate', '$timeout',
            function ($scope, basicControllerService, platformModal, tweetService, $translate, $timeout) {

                //translate
                $scope.tweetTranslate = {
                    like: $translate.instant('tweet.like'),
                    comments: $translate.instant('tweet.comments'),
                    comment: $translate.instant('tweet.comment'),
                    share: $translate.instant('tweet.share'),
                    tweetName: $translate.instant('tweet.tweetName')
                };

                //decide infinite-scroll
                $scope.moreTweet = true;

                $scope.options = {
                    pageNumber: 0,
                    pageSize: 10
                };

                //tweet list
                $scope.list =[];

                /*
                 *infinite scroll to load more
                 */
                $scope.loadMore = function () {

                    $timeout(function () {

                        tweetService.getTweetByPagination($scope.options).then(function (data) {
                            if (data.length) {
                                $scope.options.pageNumber++;
                                $scope.list = $scope.list.concat(data);
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                            } else {
                                $scope.moreTweet = false;
                            }

                        }, function () {
                            $scope.moreContact = false;
                        });
                    }, 1000);
                };

                /*
                 * add tweet modal
                 */
                $scope.modalFn = {
                    openModal: function () {
                        platformModal.openModal({
                            templateUrl: 'js/tweet/templates/add-tweet.html',
                            scope: $scope
                        });
                    },
                    hideModal: platformModal.hideModal
                };

                /*
                 * destroy
                 */
                $scope.$on('$destroy', function () {
                    $scope.modal.remove();
                })
            }]);
})(angular);