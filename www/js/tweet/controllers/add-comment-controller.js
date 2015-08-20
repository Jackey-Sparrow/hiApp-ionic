/**
 * Created by Jackey Li on 2015/8/20.
 */
(function (angular) {
    'use strict';
    /*
     * add comment controller
     */
    angular.module(globalSettings.appName).controller('addCommentController',
        ['$scope', '$translate',
            function ($scope, $translate) {
                $scope.title = $translate.instant('tweet.addComment');
                $scope.commentText = $translate.instant('tweet.commentText');

                /*
                 * back
                 */
                $scope.back = function () {
                    $scope.modalFn.hideModal();
                };
            }]);
})(angular);