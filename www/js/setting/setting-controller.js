/**
 * Created by Jackey Li on 2015/8/5.
 */
(function (angular) {
    'use strict';

    /*
     * setting controller
     */
    angular.module(globalSettings.appName)
        .controller('settingController',
        ['$scope', 'localStorageService', '$translate',
            function ($scope, localStorageService, $translate) {

                $scope.setting = {
                    userName: '',
                    settingName: $translate.instant('setting.settingName'),
                    feekback: $translate.instant('setting.feekback'),
                    update: $translate.instant('setting.update'),
                    language: $translate.instant('setting.language'),
                    about: $translate.instant('setting.about'),
                    logout:$translate.instant('setting.logout')
                };

                var userInfo = localStorageService.getUserInfo();
                if (userInfo) {
                    $scope.setting.userName = userInfo.userName;
                }

            }]);
})(angular);