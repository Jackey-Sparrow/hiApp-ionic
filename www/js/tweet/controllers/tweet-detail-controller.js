/**
 * Created by Jackey Li on 2015/8/9.
 */
(function (angular) {
    'use strict';

    /*
     * tweet detail controller
     */
    angular.module(globalSettings.appName).controller('tweetDetailController',
        ['$scope', '$stateParams', 'tweetService','$ionicHistory','$state',
            function ($scope, $stateParams, tweetService,$ionicHistory,$state) {

                //tweet Id
                var tweetId = $stateParams.tweetId;
                if (!tweetId) {
                    $state.go('tab.tweet');
                }

                //get tweet
                $scope.tweet = tweetService.getTweetById(parseInt(tweetId));

                /*
                 * back
                 */
                $scope.back = function () {
                    //$ionicHistory.goBack();
                    $state.go('tab.tweet');
                };
            }]);
})(angular);