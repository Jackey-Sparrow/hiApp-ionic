/**
 * Created by Jackey Li on 2015/8/5.
 */
(function (angular) {
    'use strict';
    angular.module(globalSettings.appName)
        .controller('settingController', function ($scope) {
            $scope.settings = {
                enableFriends: true
            };
        });
})(angular);