/**
 * Created by Jackey Li on 2015/8/8.
 */
(function (angular) {
    'use strict';
    /*
     * add tweet controller
     */
    angular.module('hiApp.tweet').controller('addTweetController',
        ['$scope', '$translate',
            function ($scope, $translate) {

                $scope.title = $translate.instant('tweet.addTweet');
                $scope.somethingNew = $translate.instant('tweet.somethingNew');

                /*
                 * back
                 */
                $scope.back = function () {
                    $scope.modalFn.hideModal();
                };
            }]);
})(angular);