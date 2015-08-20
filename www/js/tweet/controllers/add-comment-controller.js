/**
 * Created by Jackey Li on 2015/8/20.
 */
(function (angular) {
    'use strict';
    /*
     * add comment controller
     */
    angular.module(globalSettings.appName).controller('addCommentController',
        ['$scope', function ($scope) {
            $scope.title = 'add comment';

            /*
             * back
             */
            $scope.back = function () {
                $scope.modalFn.hideModal();
            };
        }]);
})(angular);