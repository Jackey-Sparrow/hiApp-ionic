/**
 * Created by Jackey Li on 2015/8/8.
 */
(function (angular) {
    'use strict';
    /*
     * add tweet controller
     */
    angular.module(globalSettings.appName).controller('addTweetController',
        ['$scope', function ($scope) {
            $scope.title = 'add tweet';

            /*
             * back
             */
            $scope.back = function () {
                $scope.modalFn.hideModal();
            };
        }]);
})(angular);