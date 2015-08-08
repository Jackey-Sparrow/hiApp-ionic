/**
 * Created by lja on 5/29/2015.
 */
(function (angular) {
    'use strict';

    /* jshint -W072 */ // many parameters because of dependency injection
    angular.module(globalSettings.appName).controller('loginController',
        ['$scope', '$state', '$http', 'loginService', '$translate', 'basicControllerService', 'languageService',
            function ($scope, $state, $http, loginService, $translate, basicControllerService, languageService) {

                $scope.login = {
                    userName: '',
                    password: '',
                    error: '',
                    languageId: 1,
                    userNameLabel: $translate.instant('login.userName'),
                    passwordLabel: $translate.instant('login.password'),
                    languageLabel: $translate.instant('login.language'),
                    loginLabel: $translate.instant('login.login'),
                    loginFn: function () {

                        //a fake login loading
                        $scope.showLoading();
                        setTimeout(function () {
                            $scope.hideLoading();
                            $state.go('tab.tweet');
                        }, 2000);
                    }
                };

                //extend basic controller
                basicControllerService.initController($scope);

                //todo:provide a language service
                $scope.languages = languageService.getList();

                /*
                 * change language and reset the translate setting
                 */
                $scope.changeLanguage = function () {
                    $scope.chooseLanguage = languageService.getLanguageById($scope.login.languageId);
                    $translate.use($scope.chooseLanguage.languageTranslate);
                    $scope.login.userNameLabel = $translate.instant('login.userName');
                    $scope.login.passwordLabel = $translate.instant('login.password');
                    $scope.login.languageLabel = $translate.instant('login.language');
                    $scope.login.loginLabel = $translate.instant('login.login');
                };

                $scope.chooseLanguage = languageService.getLanguageById($scope.login.languageId);

            }
        ]);

    angular.module(globalSettings.appName).factory('loginService',
        [
            function () {

                return null;
            }]);

})(angular);