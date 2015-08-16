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
        ['$scope', 'localStorageService', '$translate', 'basicControllerService',
            function ($scope, localStorageService, $translate, basicControllerService) {

                //extend the basic class
                basicControllerService.initController($scope);

                //translate
                $scope.setting = {
                    userName: '',
                    settingName: $translate.instant('setting.settingName'),
                    feekback: $translate.instant('setting.feekback'),
                    update: $translate.instant('setting.update'),
                    language: $translate.instant('setting.language'),
                    about: $translate.instant('setting.about'),
                    logout: $translate.instant('setting.logout'),
                    systemInfo: $translate.instant('common.systemInfo')
                };

                //get the user login info
                var userInfo = localStorageService.getUserInfo();
                if (userInfo) {
                    $scope.setting.userName = userInfo.userName;
                }

                /*
                 * update
                 */
                $scope.update = function () {
                    $scope.showMessage($scope.setting.systemInfo, 'current version is 0.0.1');
                };

                /*
                 * about
                 */
                $scope.about = function () {
                    $scope.showMessage($scope.setting.systemInfo, 'Jackey Li \n Github:https://github.com/Jackey-Sparrow');
                };

            }]);
})(angular);