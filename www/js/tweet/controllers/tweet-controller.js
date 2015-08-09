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

                //two way to load data
                var loadDataType = {
                    refresh: 'refresh',
                    loadMore: 'loadMore'
                };

                //page options
                $scope.options = {
                    pageNumber: 0,
                    pageSize: 10,
                    type: loadDataType.loadMore
                };

                //tweet list
                $scope.list = [];

                /*
                 * get data
                 */
                $scope.getData = function () {

                    $timeout(function () {

                        tweetService.getTweetByPagination($scope.options).then(function (data) {
                            if (data.length) {
                                $scope.options.pageNumber++;
                                $scope.list = $scope.list.concat(data);
                                //store tweet list
                                tweetService.setList($scope.list);
                                if ($scope.options.type === loadDataType.loadMore) {
                                    $scope.$broadcast('scroll.infiniteScrollComplete');
                                } else {
                                    $scope.$broadcast('scroll.refreshComplete');
                                    //the first refresh, set the can more tweet true
                                    $scope.moreTweet = true;
                                }
                            } else {
                                $scope.moreTweet = false;
                            }

                        }, function () {
                            $scope.moreContact = false;
                        });
                    }, 3000);
                };

                /*
                 * load more
                 */
                $scope.loadMore = function () {
                    $scope.options.type = loadDataType.loadMore;
                    $scope.getData();
                };

                /*
                 * refresh
                 */
                $scope.refresh = function () {
                    $scope.list =[];
                    $scope.options = {
                        pageNumber: 0,
                        pageSize: 10,
                        type: loadDataType.refresh
                    };
                    $scope.getData();
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
                });
            }]);
})(angular);