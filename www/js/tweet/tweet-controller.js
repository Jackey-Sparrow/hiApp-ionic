/**
 * Created by Jackey Li on 2015/8/5.
 */
(function (angular) {
    'use strict';
    angular.module(globalSettings.appName).controller('tweetController',
        ['$scope', 'basicControllerService',
            function ($scope, basicControllerService) {
                basicControllerService.initController($scope);
            }]);
})(angular);